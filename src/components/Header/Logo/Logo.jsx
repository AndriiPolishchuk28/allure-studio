import Image from 'next/image';
import Link from 'next/link';
import { logo } from '@/assets/images/header';
import scss from './Logo.module.scss';

const Logo = ({ ...props }) => {
    return (
        <Link {...props} href="/" className={scss.logo}>
            <Image src={logo} width={32} height={29} alt="Allure" priority />
            <span className={scss.logoTitle}>ALLURE</span>
        </Link>
    );
};

export default Logo;
