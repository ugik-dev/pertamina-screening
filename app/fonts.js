import { Roboto, Nerko_One } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const nerko = Nerko_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nerko",
});
