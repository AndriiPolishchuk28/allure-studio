import Container from '../Container';
import Logo from './Logo';
import BurgerMenu from './BurgerMenu';
import scss from './Header.module.scss';

const Header = () => {
    return (
        <header className={scss.header}>
            <Container>
                <div className={scss.wrapper}>
                    <Logo />
                    <BurgerMenu />
                </div>
            </Container>
        </header>
    );
};

export default Header;
