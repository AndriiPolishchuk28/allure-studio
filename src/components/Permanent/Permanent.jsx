import scss from './Permanent.module.scss';
import Image from 'next/image';
import ReadMore from './ReadMore';

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
                <Image
                    src="/img/photo.png"
                    alt="Owner photo"
                    width={174}
                    height={269}
                />
                <div className={scss.stick}></div>
                <div className={scss.smear_wrapper}>
                    <p className={scss.smear_text}>
                        2022 Inhaberin und Geschäftsführering von ALLURE
                        Permanent Make up & Beauty, 2022 Jury-Mitgleider der
                        German WULOP, 2021 Siegerin der German WULOP (Powder
                        Brow), seit 2018 Permanent Make up - Artis
                    </p>
                    <ReadMore />
                </div>
            </div>
        </section>
    );
};

export default Permanent;
