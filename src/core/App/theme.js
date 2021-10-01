const colorNames = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  slateGray: "#6E7E91",
  mercury: "#E5E5E5",
  mineShaft: "#252525",
  mineShaftTransparent: "rgba(54, 54, 54, 0.72)",
  dodgerBlue: "#2188FF",
  scinceBlue: "#0366D6",
};

const common = {
  breakpoints: {
    mobile: 767,
    tablet: 991,
  }
}

export const themeLight = {
  ...common,
  colors: {
    textPrimary: colorNames.mineShaft,
    textSecondary: colorNames.slateGray,
    white: colorNames.white,
    mainAccent: colorNames.scinceBlue,
    lightGray: colorNames.mercury,
    background: colorNames.whiteLilac,
    sectionBackground: colorNames.mineShaftTransparent,
  },
};

export const themeDark = {
  ...common,
  colors: {
    textPrimary: colorNames.white,
    textSecondary: colorNames.white,
    white: colorNames.white,
    mainAccent: colorNames.dodgerBlue,
    background: colorNames.mineShaft,
  },
};