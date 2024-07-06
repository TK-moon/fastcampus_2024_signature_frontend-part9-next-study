import nextLocalFont from "next/font/local";

const gilroy = nextLocalFont({
  src: [
    {
      path: "./Gilroy/Gilroy-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Gilroy/Gilroy-SemiBold.otf",
      weight: "500",
      style: "normal",
    },
  ],
  adjustFontFallback: "Times New Roman",
  preload: false,
  fallback: ["system-ui"],
});

export { gilroy };
