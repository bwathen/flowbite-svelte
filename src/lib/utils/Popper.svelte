<script lang="ts">
  import type { Coords, Middleware, Placement, Strategy } from "@floating-ui/dom";
  import * as dom from "@floating-ui/dom";
  import Arrow from "./Arrow.svelte";
  import type { ParamsType, PopperProps, TriggeredToggleEvent } from "$lib";
  import { fade } from "svelte/transition";
  import { sineIn } from "svelte/easing";
  import clsx from "clsx";

  let { triggeredBy, triggerDelay = 200, trigger = "click", placement = "top", offset = 8, arrow = false, yOnly = false, strategy = "absolute", reference, middlewares = [dom.flip(), dom.shift()], onbeforetoggle: _onbeforetoggle, ontoggle: _ontoggle, class: className = "", arrowClass = "", isOpen = $bindable(false), transitionParams, transition = fade, children, ...restProps }: PopperProps = $props();

  let focusable: boolean = true;
  let clickable: boolean = $derived(trigger === "click");
  let hoverable: boolean = $derived(trigger === "hover");

  let popover: HTMLElement | null = $state(null);
  let invoker: HTMLElement | null = null;
  let referenceElement: HTMLElement | null = null;
  let triggerEls: HTMLElement[] = [];
  let arrowParams: { placement: Placement; cords: Partial<Coords>; strategy: Strategy } = $state({
    placement,
    cords: { x: 0, y: 0 },
    strategy
  });

  const paramsDefault = { duration: 100, easing: sineIn };
  const paramsOptions = $derived(transitionParams ?? paramsDefault);

  const px = (n: number | undefined) => (n ? `${n}px` : "");

  function updatePopoverPosition() {
    if (!invoker || !popover) {
      return;
    }

    const arrowEl: HTMLElement | null = popover.querySelector(".popover-arrow");

    let middleware: Middleware[] = [...middlewares, dom.offset(offset)];
    if (arrowEl) middleware.push(dom.arrow({ element: arrowEl }));

    return dom.computePosition(referenceElement ?? invoker, popover, { placement, middleware, strategy }).then(({ x, y, middlewareData: { arrow }, placement: pl, strategy }) => {
      if (popover) {
        Object.assign(popover.style, { position: strategy, left: yOnly ? "0" : px(x), top: px(y) });

        if (arrow && arrowEl) {
          arrowParams = { placement: pl, cords: { x: arrow.x, y: arrow.y }, strategy };
        }
      }
    });
  }

  let isTriggered: boolean = false;

  async function open_popover(ev: Event) {
    // throttle
    isTriggered = true;
    await new Promise((resolve) => setTimeout(resolve, triggerDelay));
    if (!isTriggered) {
      return;
    }

    ev.preventDefault();

    if (ev.target !== invoker && triggerEls.includes(ev.target as HTMLElement)) {
      invoker = ev.target as HTMLElement;
      // if (invoker) invoker.popoverTargetElement = popover;
      isOpen = false;
      await new Promise((resolve) => setTimeout(resolve, triggerDelay));
    }

    if (ev.type === "mousedown") {
      isOpen = !isOpen;
    } else {
      isOpen = true;
    }
  }

  async function close_popover(ev: Event) {
    // For click triggers, don't close on focusout events from inside the popover
    if (trigger === "click" && ev.type === "focusout") {
      const relatedTarget = (ev as FocusEvent).relatedTarget as HTMLElement;

      // If focus is moving to somewhere inside the popover, don't close
      if (popover && relatedTarget && popover.contains(relatedTarget)) {
        return;
      }

      // If focus is moving to nowhere (like when clicking), don't close for click triggers
      if (!relatedTarget) {
        return;
      }
    }

    isTriggered = false;
    await new Promise((resolve) => setTimeout(resolve, triggerDelay));
    if (isTriggered) {
      return;
    }

    // if popover has focus don't close when leaving the invoker
    if (ev?.type === "mouseleave" && popover?.contains(popover.ownerDocument.activeElement)) {
      return;
    }
    if (ev?.type === "focusout" && popover?.contains(popover.ownerDocument.activeElement)) {
      return;
    }

    isOpen = false;
  }

  let autoUpdateDestroy = () => {};

  function on_before_toggle(ev: ToggleEvent) {
    if (!invoker || !popover) return;

    (ev as TriggeredToggleEvent).trigger = invoker;
    _onbeforetoggle?.(ev as TriggeredToggleEvent);

    // Floating UI instance when it's closed we need to keep a autoUpdate destroy function

    if (ev.newState === "open") {
      autoUpdateDestroy = dom.autoUpdate(referenceElement ?? invoker, popover, updatePopoverPosition);
      popover.ownerDocument.addEventListener("click", closeOnClickOutside);
      popover.ownerDocument.addEventListener("keydown", closeOnEscape);
    } else {
      autoUpdateDestroy();
      popover.ownerDocument.removeEventListener("click", closeOnClickOutside);
      popover.ownerDocument.removeEventListener("keydown", closeOnEscape);
    }
  }

  function on_toggle(ev: ToggleEvent) {
    if (!invoker) return;

    // Update isOpen value when popover state changes through other means
    isOpen = ev.newState === "open";

    (ev as TriggeredToggleEvent).trigger = invoker;
    _ontoggle?.(ev as TriggeredToggleEvent);
  }

  function set_triggers(node: HTMLElement) {
    const events: [string, any, boolean][] = [
      ["focusin", open_popover, focusable],
      ["focusout", close_popover, focusable],
      ["mousedown", open_popover, clickable],
      ["mouseenter", open_popover, hoverable],
      ["mouseleave", close_popover, hoverable]
    ];

    if (triggeredBy) triggerEls = [...node.ownerDocument.querySelectorAll<HTMLElement>(triggeredBy)];
    else if (node.previousElementSibling) triggerEls = [node.previousElementSibling as HTMLElement];
    else if (node.parentElement) triggerEls = [node.parentElement];

    if (!triggerEls.length) {
      console.error("No triggers found.", triggeredBy);
      return;
    }

    if (reference) referenceElement = node.ownerDocument.querySelector<HTMLElement>(reference);
    invoker = triggerEls[0];

    triggerEls.forEach((element: HTMLElement) => {
      if (element.tabIndex < 0) element.tabIndex = 0; // trigger must be focusable
      for (const [name, handler, cond] of events) if (cond) element.addEventListener(name, handler);
    });

    $effect(() => {
      return () => {
        triggerEls.forEach((element: HTMLElement) => {
          for (const [name, handler, cond] of events) if (cond) element.removeEventListener(name, handler);
        });
      };
    });
  }

  function closeOnEscape(event: KeyboardEvent) {
    if (event.key === "Escape") {
      isOpen = false;
    }
  }

  function closeOnClickOutside(event: MouseEvent) {
    if (!popover) {
      return;
    }

    const clickPath = event.composedPath();

    const isClickInsidePopover = clickPath.includes(popover);
    const isClickOnTrigger = triggerEls.some((el) => clickPath.includes(el));

    // Only close if click is outside both popover and trigger elements
    if (!isClickInsidePopover && !isClickOnTrigger) {
      close_popover(event);
      isOpen = false;
    }
  }
</script>

<div use:set_triggers hidden></div>

{#if isOpen}
  <div popover="manual" role="tooltip" bind:this={popover} class:overflow-visible={true} onfocusout={close_popover} onmouseleave={hoverable ? close_popover : undefined} onmouseenter={hoverable ? open_popover : undefined} onbeforetoggle={on_before_toggle} ontoggle={on_toggle} class={clsx(className)} transition:transition={paramsOptions as ParamsType} onintrostart={() => popover?.showPopover()} onoutroend={() => popover?.hidePopover()} {...restProps}>
    {@render children()}
    {#if arrow}
      <Arrow {...arrowParams} class={arrowClass} />
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[PopperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1977)
## Props
@prop triggeredBy
@prop triggerDelay = 200
@prop trigger = "click"
@prop placement = "top"
@prop offset = 8
@prop arrow = false
@prop yOnly = false
@prop strategy = "absolute"
@prop reference
@prop middlewares = [dom.flip(), dom.shift()]
@prop onbeforetoggle: _onbeforetoggle
@prop ontoggle: _ontoggle
@prop class: className = ""
@prop arrowClass = ""
@prop isOpen = $bindable(false)
@prop transitionParams
@prop transition = fade
@prop children
@prop ...restProps
-->
