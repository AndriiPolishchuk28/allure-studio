import Link from 'next/link';
import Logo from './Logo';
import BurgerMenu from './BurgerMenu';
import scss from './Header.module.scss';

const Header = () => {
    return (
        <header className={scss.header}>
            <div className={scss.container}>
                <div className={scss.wrapper}>
                    <Logo />
                    <BurgerMenu />
                    <Link href="#" className={scss.link}>
                        Jetzt Buchen
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
