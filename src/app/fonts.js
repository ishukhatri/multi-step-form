import localFont from "next/font/local";

export const Ubuntu = localFont({
  src: [
    { path: "./fonts/Ubuntu-Bold.ttf", style: "bold" },
    {
      path: "./fonts/Ubuntu-Medium.ttf",
      style: "medium",
    },
    {
      path: "./fonts/Ubuntu-Regular.ttf",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-ubuntu",
});
