const deviceSizes = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "450px",
    tablet: "768px",
    tabletL: "1024px",
};

const elevation = {
    Elevation__001:
        "0px 0px 3px rgba(0, 0, 0, 0.04), 0px 0px 5px rgba(0, 0, 0, 0.08)",
    Elevation__002:
        "0px 0px 3px rgba(0, 0, 0, 0.04), 0px 0px 6px rgba(0, 0, 0, 0.1);",
    Elevation__003:
        "0px 0px 3px rgba(0, 0, 0, 0.04), 0px 0px 8px rgba(0, 0, 0, 0.1);",
    Elevation__004:
        "0px 0px 3px rgba(0, 0, 0, 0.04), 0px 0px 11px rgba(0, 0, 0, 0.11)",
    Elevation__005:
        "0px 0px 3px rgba(0, 0, 0, 0.04), 0px 0px 13px rgba(0, 0, 0, 0.12)",
    Elevation__006:
        "0px 0px 5px rgba(0, 0, 0, 0.06), 0px 0px 15px rgba(0, 0, 0, 0.15)",
    Elevation__007:
        "0px 0px 5px rgba(0, 0, 0, 0.06), 0px 0px 17px rgba(0, 0, 0, 0.18)",
    Elevation__008:
        "0px 0px 5px rgba(0, 0, 0, 0.08), 0px 0px 28px rgba(0, 0, 0, 0.22)",
};

const colors = {
  Black: "#000",
  White: "#fff",
  Transparent: "transparent",

  TextOpacity10: "rgba(30, 30, 30, 1)",
  TextOpacity08: "rgba(30, 30, 30, 0.8)",
  TextOpacity07: "rgba(30, 30, 30, 0.7)",
  TextOpacity05: "rgba(30, 30, 30, 0.5)",
  TextOpacity03: "rgba(30, 30, 30, 0.3)",

  BorderOpacity10: "rgba(203, 203, 203, 1)",

  BackgroundGrayOpacity10: "rgba(250, 250, 250, 1)",

  //   CoverBlackOpacity07: "rgba(51, 51, 51, 0.7)",
  CoverGreenOpacity05: "rgba(75, 86, 75, 0.5)", //이미지 위에 덮을 색상

  Gray700Opacity10: "rgba(102, 102, 102, 1)", //#AAAAAA
  Gray300Opacity10: "rgba(170, 170, 170, 1)", //#666666

  Green700Opacity10: "rgba(6, 43, 4, 1)",
  Green700Opacity08: "rgba(6, 43, 4, 0.8)",
  Green700Opacity03: "rgba(6, 43, 4, 0.3)",
};

const modal = {
    size: {
        sm: 500,
        md: 700,
        lg: 900,
    },
};

const title = {
  title: {
    normal: colors.TextOpacity10,
  },
  sub: {
    light: colors.Gray300Opacity10,
    dark: colors.Gray700Opacity10,
  },
};


const button = {
  size: {
    md: {
      height: "42rem",
      fontSize: "16rem",
      padding: "0 40rem",
    },
    lg: {
      height: "50rem",
      fontSize: "24rem",
      padding: "0 40rem",
    },
  },
  theme: {
    normal: {
      color: colors.TextOpacity10,
      background: colors.Transparent,
      hover: {
        color: colors.White,
        background: colors.TextOpacity10,
      },
      active: {
        color: colors.White,
        background: colors.TextOpacity10,
      },
      focus: {
        color: colors.White,
        background: colors.TextOpacity10,
      },
      disabled: {
        color: colors.White,
        background: colors.Gray300Opacity10,
      },
    },
  },
};

const theme = {
  deviceSizes,
  colors,
  elevation,
  modal,
  title,
  button,
};

export default theme;
