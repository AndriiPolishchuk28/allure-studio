import '../styles/globals.scss';
import { montserrat } from './ui';

export const metadata = {
    title: {
        default: 'Allure',
        template: '%s | Allure',
    },
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className={montserrat.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
