import AppointmentForm from "ui/AppointmentForm";
import Footer from "ui/Footer";
import Header from "ui/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <AppointmentForm />
        <Footer />
      </body>
    </html>
  );
}
