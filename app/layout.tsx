import AppointmentForm from 'ui/AppointmentForm';
import Footer from 'ui/Footer';
import Header from 'ui/Header';
import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className='mb-10'>{children}</main>
        <AppointmentForm />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
