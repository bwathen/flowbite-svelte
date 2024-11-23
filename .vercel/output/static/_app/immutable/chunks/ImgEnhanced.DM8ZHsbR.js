const name = "ImgEnhanced";
const props = [
  [
    "src",
    "any",
    ""
  ],
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
const ImgEnhanced = {
  name,
  props
};
export {
  ImgEnhanced as default,
  name,
  props
};
