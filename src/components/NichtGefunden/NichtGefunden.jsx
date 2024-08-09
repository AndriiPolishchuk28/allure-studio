import Link from 'next/link';
import Image from 'next/image';
import { not_found } from '@/assets/images/not-found';
import scss from './NichtGefunden.module.scss';

const NichtGefunden = () => {
    return (
        <section className={scss.section}>
            <div className={scss.container}>
                <div className={scss.wrapper}>
                    <div>
                        <h1 className={scss.title}>OOPS...</h1>
                        <div className={scss.infoTab}>
                            <p className={scss.description}>
                                Entschuldigung! Seite nicht gefunden. Lass uns
                                zur Startseite zurückkehren.
                            </p>
                            <div className={scss.linkWrapper}>
                                <Link href="/" className={scss.link}>
                                    Startseite
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Image
                        src={not_found}
                        alt="not found"
                        className={scss.image}
                    />

                    <div className={scss.info}>
                        <p className={scss.description}>
                            Entschuldigung! Seite nicht gefunden. Lass uns zur
                            Startseite zurückkehren.
                        </p>
                        <div className={scss.linkWrapper}>
                            <Link href="/" className={scss.link}>
                                Startseite
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NichtGefunden;
