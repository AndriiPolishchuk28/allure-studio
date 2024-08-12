import '../styles/globals.scss';
import { montserrat } from './ui';

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className={montserrat.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
