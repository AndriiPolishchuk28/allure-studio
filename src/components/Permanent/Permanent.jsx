import scss from './Permanent.module.scss';
import Image from 'next/image';
import ReadMore from './ReadMore/ReadMore';
import { main_tablet, main_phone, main_desktop } from '@/assets/images/main';
import clsx from 'clsx';
import { italiana, oooh_Baby } from '@/app/ui';

const Permanent = () => {
    return (
        <section className={scss.section}>
            <div className={scss.wrapper_text}>
                <h1 className={clsx(scss.title_text, italiana.className)}>
                    PERMANENT SCHÖN MIT ALLURE
                </h1>
                <h2 className={clsx(scss.subtitle_text, italiana.className)}>
                    Permanent Make-Up & Beauty
                </h2>
                <p className={clsx(scss.text_owner, oooh_Baby.className)}>
                    by Uliana Eremenko
                </p>
            </div>
            <div className={scss.photo_text_wrapper}>
                <div className={scss.stick}></div>
                <div className={scss.img_wrapper}>
                    <picture>
                        <source
                            media="(min-width: 1440px)"
                            srcSet={main_desktop.src}
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet={main_tablet.src}
                        />
                        <Image
                            src={main_phone}
                            alt="Owner photo"
                            priority
                            className={scss.image}
                        />
                    </picture>

                    <div className={scss.smear_wrapper_text}>
                        <p className={scss.smear_text}>
                            2022 Inhaberin und Geschäftsführerin von ALLURE
                            Permanent Make up & Beauty, 2022 Jury-Mitgleid der
                            German WULOP, 2021 Siegerin der German WULOP (Powder
                            Brow), seit 2018 Permanent Make up - Artist
                        </p>
                        <div className={scss.tablet_text_wrapper}>
                            <p
                                className={clsx(
                                    scss.smear_text,
                                    scss.tablet_text
                                )}
                            >
                                2022 Inhaberin und Geschäftsführerin von ALLURE
                                Permanent Make up & Beauty, 2022 Jury-Mitgleid
                                der German WULOP, 2021 Siegerin der German WULOP
                                (Powder Brow), seit 2018 Permanent Make up -
                                Artist.
                            </p>
                            <p
                                className={clsx(
                                    scss.smear_text,
                                    scss.tablet_text
                                )}
                            >
                                Beauty ist unsere Leidenschaft. 2022 konnten wir
                                nun endlich unser eigenes Studio im Herzen von
                                Berlin eröffnen. Wir sind ein Zusammenschluss
                                aus Beauty-Experten.
                            </p>
                        </div>
                        <div className={scss.desktop_text_wrapper}>
                            <p
                                className={clsx(
                                    scss.smear_text,
                                    scss.desktop_text
                                )}
                            >
                                2022 Inhaberin und Geschäftsführerin von ALLURE
                                Permanent Make up & Beauty, 2022 Jury-Mitgleid
                                der German WULOP, 2021 Siegerin der German WULOP
                                (Powder Brow), seit 2018 Permanent Make up -
                                Artist.
                            </p>
                            <p
                                className={clsx(
                                    scss.smear_text,
                                    scss.desktop_text
                                )}
                            >
                                Beauty ist unsere Leidenschaft. 2022 konnten wir
                                nun endlich unser eigenes Studio im Herzen von
                                Berlin eröffnen. Wir sind ein Zusammenschluss
                                aus Beauty-Experten. Die sich das Ziel gesetzt
                                haben Menschen aus Berlin und aller Welt ihren
                                Wunsch nach permanenter Schönheit zu erfüllen.
                                Unser Leistungskatalog von ALLURE Permanent Make
                                up & Beauty umfasst Permanent Make- up
                                Behandlungen, Nageldesign, Wimpern und
                                Augenbrauenlaminierung und Massagen.
                            </p>
                        </div>
                        <ReadMore />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Permanent;
