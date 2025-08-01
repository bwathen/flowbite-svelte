<script lang="ts">
  import clsx from "clsx";
  import { imagePlaceholder, type ImagePlaceholderTheme } from ".";
  import type { ImagePlaceholderProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { size = "md", rounded, imgOnly = false, class: className, ...restProps }: ImagePlaceholderProps = $props();

  const theme = getTheme("imagePlaceholder");

  const { base, image, svg, content, line } = $derived(
    imagePlaceholder({
      size,
      rounded
    })
  );
</script>

<div role="status" {...restProps} class={base({ class: clsx(className, (theme as ImagePlaceholderTheme)?.base) })}>
  <div class={image({ class: clsx((theme as ImagePlaceholderTheme)?.image) })}>
    <svg width="48" height="48" class={svg({ class: clsx((theme as ImagePlaceholderTheme)?.svg) })} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
    </svg>
  </div>
  {#if !imgOnly}
    <div class={content({ class: clsx((theme as ImagePlaceholderTheme)?.content) })}>
      <div
        class={line({
          class: clsx("mb-4 h-2.5 w-1/2", (theme as ImagePlaceholderTheme)?.line)
        })}
      ></div>
      <div
        class={line({
          class: clsx("mb-2.5 h-2 w-9/12", (theme as ImagePlaceholderTheme)?.line)
        })}
      ></div>
      <div
        class={line({
          class: clsx("mb-2.5 h-2", (theme as ImagePlaceholderTheme)?.line)
        })}
      ></div>
      <div
        class={line({
          class: clsx("mb-2.5 h-2", (theme as ImagePlaceholderTheme)?.line)
        })}
      ></div>
      <div
        class={line({
          class: clsx("mb-2.5 h-2 w-10/12", (theme as ImagePlaceholderTheme)?.line)
        })}
      ></div>
      <div
        class={line({
          class: clsx("mb-2.5 h-2 w-11/12", (theme as ImagePlaceholderTheme)?.line)
        })}
      ></div>
      <div
        class={line({
          class: clsx("h-2 w-9/12", (theme as ImagePlaceholderTheme)?.line)
        })}
      ></div>
    </div>
  {/if}
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ImagePlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1404)
## Props
@prop size = "md"
@prop rounded
@prop imgOnly = false
@prop class: className
@prop ...restProps
-->
