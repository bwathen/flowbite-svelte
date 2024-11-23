const name = "Spinner";
const props = [
  [
    "color",
    '"primary" | "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue" | "orange" | "amber" | "lime" | "emerald" | "teal" | "cyan" | "sky" | "violet" | "fuchsia" | "rose" | "secondary" | undefined',
    '"primary"'
  ],
  [
    "size",
    '"8" | "4" | "5" | "6" | "10" | "12" | "16" | undefined',
    '"8"'
  ],
  [
    "class",
    "string",
    ""
  ],
  [
    "currentFill",
    "string",
    '"currentFill"'
  ],
  [
    "currentColor",
    "string",
    '"currentColor"'
  ]
];
const Spinner = {
  name,
  props
};
export {
  Spinner as default,
  name,
  props
};
