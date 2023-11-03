import { Besley } from "next/font/google";
import "./globals.css";

const besley = Besley({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Lucian Earl",
  description: "The real guy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={besley.className}>{children}</body>
    </html>
  );
}
