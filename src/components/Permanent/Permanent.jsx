'use client';

import scss from './Permanent.module.scss';
import Image from 'next/image';
import ReadMore from './ReadMore/ReadMore';
import { main_tablet, main_phone, main_desktop } from '@/assets/images/main';
import clsx from 'clsx';

const Permanent = () => {
    return (
        <section className={scss.section}>
            <div className={scss.wrapper_text}>
                <h1 className={scss.title_text}>PERMANENT SCHÖN MIT ALLURE</h1>
                <h2 className={scss.subtitle_text}>
                    Permanent Make-Up &amp Beauty
                </h2>
                <p className={scss.text_owner}>by Uliana Eremenko</p>
            </div>
            <div className={scss.img_wrapper}>
                {/* <div className={scss.test}> */}
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
                {/* </div> */}

                <div className={scss.stick}></div>
                <div className={scss.smear_wrapper}>
                    <div className={scss.smear_wrapper_text}>
                        <p className={scss.smear_text}>
                            2022 Inhaberin und Geschäftsführering von ALLURE
                            Permanent Make up & Beauty, 2022 Jury-Mitgleider der
                            German WULOP, 2021 Siegerin der German WULOP (Powder
                            Brow), seit 2018 Permanent Make up - Artis Mehr
                            lesen
                        </p>
                        <div className={scss.tablet_text_wrapper}>
                            <p
                                className={clsx(
                                    scss.smear_text,
                                    scss.tablet_text
                                )}
                            >
                                2022 Inhaberin und Geschäftsführering von ALLURE
                                Permanent Make up & Beauty, 2022 Jury-Mitgleider
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
                                aus sechs Beauty-Experten.
                            </p>
                        </div>
                        <div className={scss.desktop_text_wrapper}>
                            <p
                                className={clsx(
                                    scss.smear_text,
                                    scss.desktop_text
                                )}
                            >
                                2022 Inhaberin und Geschäftsführering von ALLURE
                                Permanent Make up & Beauty, 2022 Jury-Mitgleider
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
                                aus sechs Beauty-Experten. Die sich das Ziel
                                gesetzt haben Menschen aus Berlin und aller Welt
                                ihren Wunsch nach permanenter Schönheit zu
                                erfüllen. Unser Leistungskatalog von ALLURE
                                Permanent Make up & Beauty umfasst Permanent
                                Make- up Behandlungen, Nageldesign,
                                Wimpernverdichtung und Wimpernverlängerung. Neu
                                in unserem Angebot sind zu dem Massagen.
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
