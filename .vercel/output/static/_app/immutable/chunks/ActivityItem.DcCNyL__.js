const name = "ActivityItem";
const props = [
  [
    "activities",
    "interface ActivityType {\n  name: HTMLElement | string;\n  date: Date | string;\n  src: string;\n  alt: string;\n  activity?: HTMLElement | string;\n}[]",
    ""
  ],
  [
    "liClass",
    "string",
    ""
  ],
  [
    "spanClass",
    "string",
    ""
  ],
  [
    "imgClass",
    "string",
    ""
  ],
  [
    "outerDivClass",
    "string",
    ""
  ],
  [
    "innerDivClass",
    "string",
    ""
  ],
  [
    "timeClass",
    "string",
    ""
  ],
  [
    "titleClass",
    "string",
    ""
  ],
  [
    "textClass",
    "string",
    ""
  ]
];
const ActivityItem = {
  name,
  props
};
export {
  ActivityItem as default,
  name,
  props
};
