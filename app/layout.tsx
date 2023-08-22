import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

export const metadata = {
  title: "Design Flow",
  description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
