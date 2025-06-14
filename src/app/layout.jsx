import '../styles/globals.scss';
import { montserrat } from './ui';

export const metadata = {
    title: {
        default: 'ALLURE-Permanent Make-up & Beauty in Berlin Mitte',
        template: '%s | Allure',
    },
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <link sizes="16x16" rel="icon" href="/favicon.svg" />
            </head>
            <body className={montserrat.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
