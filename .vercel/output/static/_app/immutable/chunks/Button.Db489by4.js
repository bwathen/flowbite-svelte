const name = "Button";
const props = [
  [
    "children",
    "Snippet",
    ""
  ],
  [
    "pill",
    "boolean",
    "false"
  ],
  [
    "outline",
    "boolean",
    "false"
  ],
  [
    "size",
    '"sm" | "md" | "lg" | "xl" | "xs" | undefined',
    'group ? "sm" : "md"'
  ],
  [
    "href",
    "string",
    ""
  ],
  [
    "type",
    "any",
    '"button"'
  ],
  [
    "color",
    '"primary" | "dark" | "alternative" | "light" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose"',
    'group ? (outline ? "dark" : "alternative") : "primary"'
  ],
  [
    "shadow",
    "boolean",
    "false"
  ],
  [
    "tag",
    "string",
    '"button"'
  ],
  [
    "disabled",
    "boolean",
    ""
  ],
  [
    "class",
    "string",
    ""
  ]
];
const Button = {
  name,
  props
};
export {
  Button as default,
  name,
  props
};
