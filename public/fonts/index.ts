import localFont from "next/font/local";

const merriweather = localFont({
  src: [
    {
      path: "./merriweather-sans/MerriweatherSans-Light.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "./merriweather-sans/MerriweatherSans-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./merriweather-sans/MerriweatherSans-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./merriweather-sans/MerriweatherSans-SemiBold.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "./merriweather-sans/MerriweatherSans-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./merriweather-sans/MerriweatherSans-ExtraBold.ttf",
      style: "normal",
      weight: "800",
    },
  ],
  preload: true,
  display: "swap",
  variable: "--font-merriweather",
});

export { merriweather };
