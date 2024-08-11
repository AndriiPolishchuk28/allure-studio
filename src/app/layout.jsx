// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import '../styles/globals.scss';
import { montserrat } from '@/app/ui';

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className={montserrat.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
