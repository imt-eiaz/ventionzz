import "@/styles/globals.css";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${plusJakartaSans.variable} ${sora.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
