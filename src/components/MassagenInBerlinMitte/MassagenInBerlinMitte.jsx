import Link from 'next/link';
import Image from 'next/image';
import PageTitle from '../PageTitle';
import { photo_1, photo_1_desk, photo_1_tab } from '@/assets/images/massage';
import ReadMore from './ReadMore';
import scss from './MassagenInBerlinMitte.module.scss';

const MassagenInBerlinMitte = () => {
    return (
        <section className={scss.section}>
            <div className={scss.container}>
                <div className={scss.wrapper}>
                    <picture>
                        <source
                            media="(min-width: 1440px)"
                            srcSet={photo_1_desk.src}
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet={photo_1_tab.src}
                        />
                        <Image
                            src={photo_1}
                            alt="massagen IN BERLIN MITTE"
                            className={scss.image}
                        />
                    </picture>
                    <div className={scss.info}>
                        <PageTitle
                            style={{ marginBottom: 0 }}
                            className={scss.pageTitle}
                        >
                            massage IN BERLIN MITTE
                        </PageTitle>
                        <div className={scss.description}>
                            <p className={scss.descriptionParagraph}>
                                Lasse dich fallen, genieße den Moment mit
                                unseren Massagen in deiner Nähe in Berlin-Mitte.
                                Lasst uns zusammen den Alltag und den Stress
                                hinter uns lassen. Tue nur was für dich und
                                belebe deinen Körper wieder, denn er und du
                                haben es verdient. Kom in den Genuss der
                                unvergesslichen Hände von unserem zertifizierten
                                Masseur.
                            </p>
                            <p className={scss.descriptionParagraphAdditional}>
                                Wir bieten verschieden Massage-Anwendungen an:
                                Allgemeine Wellness/Massage, Rücken und
                                Nackenmassage, Anti-Stress Bodymassage, Lokale
                                Massage (Kopf, Arme, Beine, Bauch) und unsere
                                Anti-Celluilite-Massage
                            </p>
                        </div>

                        <ReadMore />

                        <div className={scss.linkWrapperDesk}>
                            <Link
                                href="https://www.instagram.com/allure.massage?igsh=MTI2YzAxcGswbjk5NA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className={scss.link}
                            >
                                Alles Unsere Arbeiten in Instagrame
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={scss.linkWrapper}>
                    <Link
                        href="https://www.instagram.com/allure.massage?igsh=MTI2YzAxcGswbjk5NA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className={scss.link}
                    >
                        Alles Unsere Arbeiten in Instagrame
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MassagenInBerlinMitte;
