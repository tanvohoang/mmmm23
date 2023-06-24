import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientOnly from "../../components/ClientOnly";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "my - title",
    template: "%s | my-title",
  },
  description: {
    template: "%s",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body>
        <ClientOnly>

        <Header />
        {children}
        <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}