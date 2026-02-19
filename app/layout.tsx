import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "ARMOS SECURITY LTD",
  description: "Professional Door Supervision & CCTV Monitoring Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">

        <Navbar />

        <div className="pt-20">
          {children}
        </div>

      </body>
    </html>
  );
}
