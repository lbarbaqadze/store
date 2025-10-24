import './globals.css';
import { BasketProvider } from './context/basketContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Apple Store"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BasketProvider>          
            {children}          
          <ToastContainer position="top-right" autoClose={2000} />
        </BasketProvider>
      </body>
    </html>
  );
}
