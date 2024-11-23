const name = "Img";
const props = [
  [
    "size",
    '"sm" | "md" | "lg" | "xl" | "2xl" | "none" | "xs" | "full" | undefined',
    '"none"'
  ],
  [
    "alignment",
    '"left" | "center" | "right" | undefined',
    '"left"'
  ],
  [
    "effect",
    '"none" | "grayscale" | "blur" | "invert" | "sepia" | "saturate" | "hue-rotate" | undefined',
    '"none"'
  ],
  [
    "shadow",
    '"sm" | "md" | "lg" | "xl" | "2xl" | "none" | "regular" | "inner" | undefined',
    '"none"'
  ],
  [
    "rounded",
    '"sm" | "md" | "lg" | "xl" | "2xl" | "full" | "none" | "regular" | "3xl" | undefined',
    '"none"'
  ],
  [
    "caption",
    "string",
    ""
  ],
  [
    "imgClass",
    "string",
    ""
  ],
  [
    "figClass",
    "string",
    ""
  ],
  [
    "captionClass",
    "string",
    ""
  ],
  [
    "href",
    "string",
    ""
  ]
];
const Img = {
  name,
  props
};
export {
  Img as default,
  name,
  props
};
