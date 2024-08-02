import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../assets/images/header/logo.svg';
import scss from './Logo.module.scss';

const Logo = ({ ...props }) => {
    return (
        <Link {...props} href="/" className={scss.logo}>
            <Image src={logo} alt="Allure" priority className={scss.image} />
            <span className={scss.logoTitle}>ALLURE</span>
        </Link>
    );
};

export default Logo;
