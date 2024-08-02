import Container from '../Container';
import FooterInfo from './FooterInfo/FooterInfo';
import FooterLinks from './FooterLinks';
import FooterContacts from './FooterContacts';
import scss from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={scss.footer}>
            <Container>
                <div className={scss.wrapper}>
                    <FooterInfo />
                    <div className={scss.mainWrapper}>
                        <FooterLinks />
                        <FooterContacts />
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
