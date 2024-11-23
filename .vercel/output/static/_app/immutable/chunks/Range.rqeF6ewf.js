const name = "Range";
const props = [
  [
    "value",
    "number | string",
    "$bindable()"
  ],
  [
    "appearance",
    '"auto" | "none" | undefined',
    '"none"'
  ],
  [
    "color",
    '"gray" | "red" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined',
    '"blue"'
  ],
  [
    "rangeSize",
    '"sm" | "md" | "lg"',
    '"md"'
  ],
  [
    "inputClass",
    "string",
    ""
  ]
];
const Range = {
  name,
  props
};
export {
  Range as default,
  name,
  props
};
