'use client';
import { useEffect, useState } from 'react';
import scss from './Permanent.module.scss';
import Image from 'next/image';
import ReadMore from './ReadMore/ReadMore';
import { main_tablet, main_phone } from '@/assets/images/main';
import { photo1 } from '@/assets/images/nageldesign';
import { useMediaQuery } from 'react-responsive';

const generateText = (isMobile, isTablet) => {
    if (isMobile) {
        return '2022 Inhaberin und Geschäftsführering von ALLURE Permanent Make up & Beauty,\n2022 Jury-Mitgleider der German WULOP,\n2021 Siegerin der German WULOP (Powder Brow),\nseit 2018 Permanent Make up - Artis';
    } else if (isTablet) {
        return '2022 Inhaberin und Geschäftsführering von ALLURE Permanent Make up & Beauty,\n2022 Jury-Mitgleider der German WULOP,\n2021 Siegerin der German WULOP (Powder Brow),\nseit 2018 Permanent Make up - Artist.\nBeauty ist unsere Leidenschaft.\n2022 konnten wir nun endlich unser eigenes Studio im Herzen von Berlin eröffnen.\nWir sind ein Zusammenschluss aus sechs Beauty-Experten.';
    } else {
        return 'desktop';
    }
};

const Permanent = () => {
    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1439px)',
    });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const [text, setText] = useState('');

    useEffect(() => {
        setText(generateText(isMobile, isTablet));
    }, [isMobile, isTablet]);

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
                <picture>
                    <source media="(min-width: 1440px)" srcSet={photo1.src} />
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
                <div className={scss.stick}></div>
                <div className={scss.smear_wrapper}>
                    <p className={scss.smear_text}>{text}</p>
                    <ReadMore />
                </div>
            </div>
        </section>
    );
};

export default Permanent;
