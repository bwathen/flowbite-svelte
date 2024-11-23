const name = "Indicator";
const props = [
  [
    "children",
    "Snippet",
    ""
  ],
  [
    "color",
    '"primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined',
    '"primary"'
  ],
  [
    "cornerStyle",
    '"rounded" | "circular"',
    '"circular"'
  ],
  [
    "size",
    '"md" | "sm" | "lg" | "xl" | "xs" | undefined',
    '"md"'
  ],
  [
    "border",
    "boolean",
    "false"
  ],
  [
    "placement",
    '"top-left" | "top-center" | "top-right" | "center-left" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right" | "default" | "center" | undefined | undefined',
    ""
  ],
  [
    "offset",
    "boolean",
    "true"
  ],
  [
    "class",
    "string",
    ""
  ]
];
const Indicator = {
  name,
  props
};
export {
  Indicator as default,
  name,
  props
};
