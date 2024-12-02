import '../styles/globals.scss';
import { montserrat } from './ui';
import Script from 'next/script';

export const metadata = {
    title: {
        default: 'Allure studio',
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
            <Script src="https://connect.shore.com/widget/loading.js"></Script>
        </html>
    );
};

export default RootLayout;
