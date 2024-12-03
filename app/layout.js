import localFont from "next/font/local";
import "./globals.css";

const gtUltra = localFont({
  src: [
  { 
    path: "./fonts/GTUltra-Black.otf",
    weight: "900",
    style: "normal"
  },
  
  { 
    path: "./fonts/GTUltra-Black.otf",
    weight: "900",
    style: "normal"
  }, 
  { 
    path: "./fonts/GTUltra-Black.otf",
    weight: "900",
    style: "normal"
  }, 
  { 
    path: "./fonts/GTUltra-Black.otf",
    weight: "900",
    style: "normal"
  }, 
  { 
    path: "./fonts/GTUltra-Black.otf",
    weight: "900",
    style: "normal"
  }, 
  { 
    path: "./fonts/GTUltra-BlackItalic.otf",
    weight: "800",
    style: "normal"
  }, 
  { 
    path: "./fonts/GTUltra-Bold.otf",
    weight: "700",
    style: "normal"
  }, 
  { 
    path: "./fonts/GTUltra-Regular.otf",
    weight: "600",
    style: "normal"
  }, 
  { 
    path: "./fonts/GTUltra-RegularItalic.otf",
    weight: "500",
    style: "normal"
  }, 
  { 
    path: "./fonts/GTUltra-Light.otf",
    weight: "400",
    style: "normal"
  }, 
  { 
    path: "./fonts/GTUltra-LightItalic.otf",
    weight: "300",
    style: "normal"
  }, 
  { 
    path: "./fonts/GTUltra-Thin.otf",
    weight: "200",
    style: "normal"
  }, 
  { 
    path: "./fonts/GTUltra-ThinItalic.otf",
    weight: "100",
    style: "normal"
  }
],
  variable: "--font-gtultra",
})
 
    
 

export const metadata = {
  title: "Reboot Hackathojn",
  description: "ECP Tigers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gtUltra.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
