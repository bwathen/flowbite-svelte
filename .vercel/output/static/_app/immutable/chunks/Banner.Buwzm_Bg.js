const name = "Banner";
const props = [
  [
    "children",
    "Snippet",
    ""
  ],
  [
    "header",
    "Snippet",
    ""
  ],
  [
    "bannerStatus",
    "boolean",
    "$bindable(true)"
  ],
  [
    "position",
    '"static" | "fixed" | "absolute" | "relative" | "sticky"',
    '"sticky"'
  ],
  [
    "dismissable",
    "boolean",
    "true"
  ],
  [
    "color",
    '"primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose"',
    '"gray"'
  ],
  [
    "bannerType",
    '"default" | "bottom" | "cta" | "signup" | "info"',
    '"default"'
  ],
  [
    "class",
    "string",
    ""
  ],
  [
    "innerClass",
    "string",
    ""
  ],
  [
    "transition",
    "TransitionFunc",
    "fade"
  ],
  [
    "params",
    "object",
    ""
  ]
];
const Banner = {
  name,
  props
};
export {
  Banner as default,
  name,
  props
};
