import Image from 'next/image';
import scss from './ImpressumPage.module.scss';
import { impressum } from '@/assets/images/impressum';

const ImpressumPage = () => {
    return (
        <section className={scss.wrapper}>
            <h2 className={scss.title}>Impressum</h2>
            <div className={scss.desktop_wrapper}>
                <Image
                    src={impressum}
                    alt="impressum_photo"
                    className={scss.image}
                />
                <dl className={scss.info_list}>
                    <div className={scss.item}>
                        <dt className={scss.text}>Firmenname:</dt>
                        <dd className={scss.text}>
                            Allure Permanent Make-up & Beauty
                        </dd>
                    </div>
                    <div className={scss.item}>
                        <dt className={scss.text}>Anschrift:</dt>
                        <dd className={scss.text}>
                            Linienstr. 154A 10115 Berlin
                        </dd>
                    </div>
                    <div className={scss.item}>
                        <dt className={scss.text}>Telefonumer:</dt>
                        <dd className={scss.text}>+49 1713208120</dd>
                    </div>
                    <div className={scss.item}>
                        <dt className={scss.text}>E-Mail:</dt>
                        <dd className={scss.text}>
                            <a href="mailto:uliana.eremenko@allure-studio.de">
                                uliana.eremenko@allure-studio.de
                            </a>
                        </dd>
                    </div>
                    <div className={scss.item}>
                        <dt className={scss.text}>Internet:</dt>
                        <dd className={scss.text}>
                            <a href="http://www.allure-studio.de">
                                www.allure-studio.de
                            </a>
                        </dd>
                    </div>
                    <div className={scss.item}>
                        <dt className={scss.text}>Geschäftsführer*in:</dt>
                        <dd className={scss.text}>Uliana Eremenko</dd>
                    </div>
                    <div className={scss.item}>
                        <dt className={scss.text}>Rechtsform:</dt>
                        <dd className={scss.text}>Einzelgewerbe</dd>
                    </div>
                    <div className={scss.item}>
                        <dt className={scss.text}>USt-IdNr.:</dt>
                        <dd className={scss.text}>33/278/00164</dd>
                    </div>
                    <div className={scss.item}>
                        <dt className={scss.text}>Registergericht:</dt>
                        <dd className={scss.text}>Handelsregister Berlin</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
};

export default ImpressumPage;
