const name = "Label";
const props = [
  [
    "children",
    "Snippet",
    ""
  ],
  [
    "color",
    'type ColorName } from "$lib/types";\n\ninterface LabelProps extends HTMLLabelAttributes {\n  children: Snippet;\n  color?: ColorName | "disabled";\n  show?: boolean;\n  class?: string;\n  for?: string;\n} | "disabled"',
    '"gray"'
  ],
  [
    "show",
    "boolean",
    "true"
  ],
  [
    "class",
    "string",
    ""
  ]
];
const Label = {
  name,
  props
};
export {
  Label as default,
  name,
  props
};
