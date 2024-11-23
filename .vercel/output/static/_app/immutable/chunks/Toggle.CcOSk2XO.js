const name = "Toggle";
const props = [
  [
    "children",
    "Snippet",
    ""
  ],
  [
    "toggleSize",
    '"default" | "small" | "large" | undefined',
    '"default"'
  ],
  [
    "value",
    "string | number",
    ""
  ],
  [
    "checked",
    "boolean | undefined",
    "$bindable()"
  ],
  [
    "disabled",
    "boolean",
    ""
  ],
  [
    "color",
    '"primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined',
    '"primary"'
  ],
  [
    "aria_describedby",
    "string",
    ""
  ],
  [
    "labelClass",
    "string",
    ""
  ],
  [
    "inputClass",
    "string",
    ""
  ],
  [
    "spanClass",
    "string",
    ""
  ],
  [
    "leftLabel",
    "Snippet",
    ""
  ]
];
const Toggle = {
  name,
  props
};
export {
  Toggle as default,
  name,
  props
};
