import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      title: "#E7EDF4",
      text: "#AFC2D4",
      primaryShape: "#0B1B2B",
      secondaryShape: "#112131",
      background: "#071422",
      brand: "#3294f8",
      span: "#7B96B2",
      label: "#3A536B",
      subtitle: "#C4D4E3",
      border: "#1C2F41",
      input: "#040F1A",
    },
    fonts: {
      default: "Nunito",
    },
  },
});
