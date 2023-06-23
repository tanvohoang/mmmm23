
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:{

    default:'my - title',
    template:'%s | my-title'
  } ,
  description:{

    template:'%s'
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
       <Footer/>
      </body>
    </html>
  );
}