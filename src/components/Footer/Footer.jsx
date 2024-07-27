import Container from '../Container';
import FooterInfo from './FooterInfo/FooterInfo';
import FooterLinks from './FooterLinks';
import scss from './Footer.module.scss';
import FooterContacts from './FooterContacts';

const Footer = () => {
    return (
        <footer className={scss.footer}>
            <Container>
                <div className={scss.wrapper}>
                    <FooterInfo />
                    <FooterLinks />
                    <FooterContacts />
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
