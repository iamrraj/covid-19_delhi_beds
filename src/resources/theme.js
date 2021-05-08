const color = {
  brightBlue: "#3498db",
  darkGrayishBlue: "#8b8d94",
  darkRed: "#a90000",
  grayishBlue: "#A4A6B3",
  grayishBlue2: "white",
  grayishBlue3: "#bdc3c7",
  lightBlue: "#3751FF",
  lightGrayishBlue: "#F7F8FC", // background color
  lightGrayishBlue2: "#FFD700",
  paleBlue: "#DDE2FF",
  paleBlueTransparent: "rgba(221, 226, 255, 0.08)",
  veryDarkGrayishBlue: "#373a47",
  veryDarkGrayishBlueWhite: "white",
  lightBlue1: "white",
  total_bed: "#0099ff",
  total_bedV: "#00cc00",
  total_bed0: "#ffe033",
};

const typography = {
  cardTitle: {
    fontWeight: "bold",
    fontSize: 19,
    lineHeight: "24px",
    letterSpacing: "0.4px",
  },
  smallSubtitle: {
    fontSize: 12,
    lineHeight: "16px",
    letterSpacing: "0.1px",
  },
  link: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: "20px",
    letterSpacing: "0.2px",
    color: color.lightBlue,
    textAlign: "right",
    cursor: "pointer",
    textDecoration: "underline",
    "&:hover": {
      color: color.grayishBlue,
    },
  },
  itemTitle: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "20px",
    letterSpacing: 0.2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "30px",
    letterSpacing: 0.3,
  },
};
// eslint-disable-next-line
export default {
  color,
  typography,
};
