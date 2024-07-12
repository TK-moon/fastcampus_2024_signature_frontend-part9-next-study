import nextLocalFont from "next/font/local";
import { Noto_Sans, Baskervville } from "next/font/google";

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

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  fallback: ["system-ui"],
  preload: true,
  adjustFontFallback: false,
});

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  fallback: ["system-ui"],
});

export { gilroy, noto_sans, baskervville };
