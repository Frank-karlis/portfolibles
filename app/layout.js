import "./globals.css";
import {Chakra_Petch} from "next/font/google";

const chakraPetch400= Chakra_Petch({
  subsets:['latin'],
  weight:'400'
})

export const metadata = {
  title: "Portfolibles",
  description: "Track your stock and Crypto Investments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={chakraPetch400.className}>{children}</body>
    </html>
  );
}
