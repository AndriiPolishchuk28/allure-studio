import Image from 'next/image';
import {
    photo_main_mobile,
    photo_main_tablet,
    photo_main_desktop,
} from '@/assets/images/nageldesign';
import scss from './NagelDesignBerlin.module.scss';
import ReadMore from './ReadMore';
import Link from 'next/link';
import Container from '../Container';

const NagelDesignBerlin = () => {
    return (
        <section className={scss.section}>
            <Container>
                <div className={scss.wrapper}>
                    <picture>
                        <source
                            media="(min-width: 1440px)"
                            srcSet={photo_main_desktop.src}
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet={photo_main_tablet.src}
                        />
                        <Image
                            src={photo_main_mobile}
                            alt="Nageldesign main photo"
                            priority
                            className={scss.image}
                        />
                    </picture>
                    <div className={scss.text_wrapper}>
                        <h3 className={scss.page_title}>
                            Perfektes nageldesign in berlin Mitte
                        </h3>
                        <h3 className={scss.page_title_desktop}>
                            <span className={scss.span}>Perfektes </span>
                            <span className={scss.span}>nageldesign </span>
                            <span className={scss.span}> in berlin Mitte</span>
                        </h3>
                        <p className={scss.description}>
                            Wir sind Oxana und Tanja, deine Nageldesigner in
                            Berlin-Mitte. Wir sind professionelle Nageldesigner,
                            die höchsten Wert auf Perfektion und Design legen.
                            Zusammen haben wir 10 Jahre Erfahrung als
                            Nageldesignerin.
                        </p>
                        <p className={scss.description}>
                            Wir sind Oxana und Tanja, deine Nageldesigner. Wir
                            sind professionelle Nageldesigner, die höchsten Wert
                            auf Perfektion und Design legen. Zusammen haben wir
                            10 Jahre Erfahrung als Nageldesignerin. Unsere
                            Anwendungen umfassen Maniküre und Pediküre.
                        </p>
                        <p className={scss.description_desktop}>
                            Wir sind Oxana und Tanja, deine Nageldesigner in
                            Berlin-Mitte in deiner Nähe. Wir sind professionelle
                            Nageldesigner, die höchsten Wert auf Perfektion und
                            Design legen. Zusammen haben wir 10 Jahre Erfahrung
                            als Nageldesignerin. Unsere Anwendungen umfassen
                            Maniküre und Pediküre. Wir pflegen deine Nägel
                            professionell in einer hygienisch einwandfreien
                            Umgebung. Unser Portfolio beinhaltet Pflege und
                            Reparatur, Schellack, Frenchnails,
                            Nagelverlängerungen und umwerfende Designs von
                            dezent bis extravagant. Du entscheidest über dein
                            Nageldesign. Gerne beraten wir dich auch zur Pflege
                            deiner Hände und Fingernägel.
                        </p>
                        <ReadMore />
                        <div className={scss.link_desktop}>
                            <Link className={scss.link} href="#">
                                Alles Unsere Arbeiten in Instagrame
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={scss.link_wrapper}>
                    <Link className={scss.link} href="#">
                        Alles Unsere Arbeiten in Instagrame
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default NagelDesignBerlin;
