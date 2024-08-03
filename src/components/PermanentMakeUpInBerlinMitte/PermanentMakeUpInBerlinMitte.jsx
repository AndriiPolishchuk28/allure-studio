import Link from 'next/link';
import Image from 'next/image';
import Container from '../Container';
import PageTitle from '../PageTitle';
import ReadMore from './ReadMore';
import { photo_1, photo_1_tab, photo_1_desk } from '@/assets/images/make-up';
import scss from './PermanentMakeUpInBerlinMitte.module.scss';

const PermanentMakeUpInBerlinMitte = () => {
    return (
        <section className={scss.section}>
            <Container>
                <div className={scss.wrapper}>
                    <div className={scss.info}>
                        <PageTitle>PERMANENT MAKE UP IN BERLIN MITTE</PageTitle>
                        <div className={scss.description}>
                            <p className={scss.descriptionParagraph}>
                                Permanente Schönheit mit ALLURE Permanent
                                Make-up & Beauty. Mit meiner nun mehr als
                                5-jährigen Erfahrung bist du in meinem Beauty
                                Studio in Berlin Mitte an der richtigen Adresse.
                                Ich bin zertifizierte Permanent Make-up
                                Artistin, meine Passion habe ich zum Beruf
                                gemacht und möchte dir deinen Wunsch nach
                                permanenter Schönheit erfüllen.
                            </p>
                            <p className={scss.descriptionParagraphAdditional}>
                                Meine exzellente Pigmentierungstechnik, Wissen
                                und Erfahrung machen dein Permanent Make-up zu
                                einem langlebigen Ergebnis das du lieben wirst.
                            </p>
                        </div>

                        <ReadMore />

                        <div className={scss.linkWrapperDesk}>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={scss.link}
                            >
                                Alles Unsere Arbeiten in Instagrame
                            </Link>
                        </div>
                    </div>
                    <picture>
                        <source
                            media="(min-width: 1140px)"
                            srcSet={photo_1_desk.src}
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet={photo_1_tab.src}
                        />
                        <Image
                            src={photo_1}
                            alt="woman"
                            priority
                            className={scss.image}
                        />
                    </picture>
                </div>
                <div className={scss.linkWrapper}>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={scss.link}
                    >
                        Alles Unsere Arbeiten in Instagrame
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default PermanentMakeUpInBerlinMitte;
