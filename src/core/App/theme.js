const colorNames = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  ironTransparent: "rgba(209, 213, 218, 0.3)",
  shipCove: "#6D93BE",
  slateGray: "#6E7E91",
  doveGray: "#6E6E6E",
  mercury: "#E5E5E5",
  mineShaft: "#252525",
  mineShaftTransparent: "rgba(54, 54, 54, 0.72)",
  anakiwa: "#8CC2FF",
  dodgerBlue: "#2188FF",
  scinceBlue: "#0366D6",
  scienceBlueTransparent: "rgba(209, 213, 218, 0.1)",
  parsleyTransparent: "rgba(20, 70, 32, 0.2)",
  lightBlue: "rgba(3, 102, 214, 0.2)",
  darkBlue: "rgba(3, 102, 214, 0.5)",
};

const common = {
  breakpoints: {
    mobile: 767,
    tablet: 991,
  },
}

export const themeLight = {
  ...common,
  colors: {
    textPrimary: colorNames.mineShaft,
    textSecondary: colorNames.slateGray,
    white: colorNames.white,
    mainAccent: colorNames.scinceBlue,
    title: colorNames.mineShaft,
    divider: colorNames.mercury,
    background: colorNames.whiteLilac,
    sectionBackground: colorNames.white,

    button: {
      background: colorNames.scinceBlue,
      border: colorNames.ironTransparent,
      boxShadow: {
        hover: `2px -2px 0px ${colorNames.anakiwa}, -2px 2px 0px ${colorNames.anakiwa}, 2px 2px 0px ${colorNames.anakiwa}, -2px -2px 0px ${colorNames.anakiwa}`,
        active: `inset 0px 2px 0px ${colorNames.parsleyTransparent}`,
      }
    },
    teil: {
      background: colorNames.white,
      border: colorNames.ironTransparent,
      boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
      hover: colorNames.lightBlue,
      title: colorNames.scinceBlue,
    },
    themeSwitch: {
      background: colorNames.mercury,
      icon: colorNames.white,
      accent: colorNames.slateGray,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    textPrimary: colorNames.white,
    textSecondary: colorNames.white,
    white: colorNames.white,
    mainAccent: colorNames.dodgerBlue,
    title: colorNames.white,
    divider: colorNames.mercury,
    background: colorNames.mineShaft,
    sectionBackground: colorNames.mineShaftTransparent,

    button: {
      background: colorNames.dodgerBlue,
      border: colorNames.ironTransparent,
      boxShadow: {
        hover: `2px -2px 0px ${colorNames.shipCove}, -2px 2px 0px ${colorNames.shipCove}, 2px 2px 0px ${colorNames.shipCove}, -2px -2px 0px ${colorNames.shipCove}`,
        active: `inset 0px 2px 0px ${colorNames.parsleyTransparent}`,
      }
    },
    teil: {
      background: colorNames.mineShaftTransparent,
      border: colorNames.scienceBlueTransparent,
      boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
      hover: colorNames.darkBlue,
      title: colorNames.white,
    },
    themeSwitch: {
      background: colorNames.doveGray,
      icon: colorNames.mineShaft,
      accent: colorNames.mercury,
    },
  },
};