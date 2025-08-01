import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";
import type { Classes } from "$lib/theme/themeUtils";

export const bottomNav = tv({
  slots: {
    base: "w-full z-30 border-gray-200 dark:bg-gray-700 dark:border-gray-600",
    inner: "grid h-full max-w-lg mx-auto"
  },
  variants: {
    position: {
      static: { base: "static" },
      fixed: { base: "fixed" },
      absolute: { base: "absolute" },
      relative: { base: "relative" },
      sticky: { base: "sticky" }
    },
    navType: {
      default: { base: "bottom-0 start-0 h-16 bg-white border-t" },
      border: { base: "bottom-0 start-0 h-16 bg-white border-t" },
      application: {
        base: "h-16 max-w-lg -translate-x-1/2 rtl:translate-x-1/2 bg-white border rounded-full bottom-4 start-1/2"
      },
      pagination: {
        base: "bottom-0 h-16 -translate-x-1/2 rtl:translate-x-1/2 bg-white border-t start-1/2"
      },
      group: {
        base: "bottom-0 -translate-x-1/2 rtl:translate-x-1/2 bg-white border-t start-1/2"
      },
      card: { base: "bottom-0 start-0 h-16 bg-white border-t" },
      meeting: {
        base: "bottom-0 start-0 grid h-16 grid-cols-1 px-8 bg-white border-t md:grid-cols-3",
        inner: "flex items-center justify-center mx-auto"
      },
      video: {
        base: "bottom-0 start-0 grid h-24 grid-cols-1 px-8 bg-white border-t md:grid-cols-3",
        inner: "flex items-center w-full"
      }
    }
  },
  defaultVariants: {
    position: "fixed",
    navType: "default"
  }
});

export const bottomNavItem = tv({
  slots: {
    base: "inline-flex flex-col items-center justify-center",
    span: "text-sm"
  },
  variants: {
    navType: {
      default: {
        base: "px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",
        span: "text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
      },
      border: {
        base: "px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600",
        span: "text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
      },
      application: {
        base: "",
        span: "sr-only"
      },
      pagination: {
        base: "px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",
        span: "sr-only"
      },
      group: {
        base: "p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group",
        span: "sr-only"
      },
      card: {
        base: "px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",
        span: "text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
      },
      meeting: {
        base: "",
        span: ""
      },
      video: {
        base: "",
        span: ""
      }
    },
    appBtnPosition: {
      left: {
        base: "px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
      },
      middle: { base: "px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" },
      right: {
        base: "px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
      }
    }
  },
  defaultVariants: {
    navType: "default",
    appBtnPosition: "middle",
    active: false
  }
});

export const bottomNavHeader = tv({
  slots: {
    base: "w-full",
    innerDiv: "grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600"
  }
});

export const bottomNavHeaderItem = tv({
  base: "px-5 py-1.5 text-xs font-medium rounded-lg",
  variants: {
    active: {
      true: "text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900",
      false: "text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
    }
  }
});

export type BottomNavSlots = keyof typeof bottomNav.slots;
export type BottomNavTheme = Partial<Record<BottomNavSlots, ClassValue>>;
export type BottomNavVariants = VariantProps<typeof bottomNav> & Classes<typeof bottomNav>;
// bottomNavItem
export type BottomNavItemSlots = keyof typeof bottomNavItem.slots;
export type BottomNavItemTheme = Partial<Record<BottomNavItemSlots, ClassValue>>;
export type BottomNavItemVariants = VariantProps<typeof bottomNavItem> & Classes<typeof bottomNavItem>;
// bottomNavHeader
export type BottomnavheaderSlots = keyof typeof bottomNavHeader.slots;
export type BottomNavHeaderTheme = Partial<Record<BottomnavheaderSlots, ClassValue>>;
export type BottomNavHeaderVariants = VariantProps<typeof bottomNavHeader> & Classes<typeof bottomNavHeader>;
// bottomNavHeaderItem
export type bottomNavHeaderItemSlots = keyof typeof bottomNavHeaderItem.slots;
export type BottomNavHeaderItemTheme = Partial<Record<bottomNavHeaderItemSlots, ClassValue>>;
export type BottomNavHeaderItemVariants = VariantProps<typeof bottomNavHeaderItem>;
