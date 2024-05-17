import "./globals.css";
import Header from "@/components/header";
import { Providers } from "./Providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const Header = dynamic(() => import("@/components/header"), {
  //   ssr: false,
  // });
  return (
    <html lang="en">
      <body className="p-0 m-0 list-none">
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
