import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navBar/Navbar";
import { UserProvider } from "@/contexts/users.context";
import { ProductProvider } from "@/contexts/products.context";
import { CartProvider } from "@/contexts/cart.context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Men's Clothing PopUp",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <UserProvider>
          <ProductProvider>  
            <CartProvider>
              <Navbar />
              {children}
            </CartProvider>
          </ProductProvider> 
        </UserProvider>

      </body>
    </html>
  );
}
