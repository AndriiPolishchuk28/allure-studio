import scss from './InjektionenBerlin.module.scss';
import Image from 'next/image';
import {
    injektionen,
    injektionen_tablet,
    injektionen_desktop,
} from '@/assets/images/injektionen';
import PageTitle from '../PageTitle';
import Link from 'next/link';

const InjektionenBerlin = () => {
    return (
        <section className={scss.section}>
            <div className={scss.injektionen_wrapper}>
                <div className={scss.title_wrapper}>
                    <div className={scss.text_wrapper}>
                        <PageTitle className={scss.title}>
                            KOSMETISCHE INJEKTIONEN
                        </PageTitle>
                        <p className={scss.description}>
                            Wir führen Injektionen mit den Botulinumtoxin,
                            Hyloronsäure und Mesotherapie durch. Die
                            unterschiedlichen Anwendungen reduzieren Fälltchen,
                            durch die Fett-weg Spritzen wird das Fett in der
                            Körperregion reduziert und mit der Filling-Methode
                            werden eure zum Beispiel Lippen aufgefüllt.
                        </p>
                        <div className={scss.link_wrapper_desktop}>
                            <Link
                                className={scss.link}
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Alles Unsere Arbeiten in Instagrame
                            </Link>
                        </div>
                    </div>
                    <picture>
                        <source
                            media="(min-width: 1440px)"
                            srcSet={injektionen_desktop.src}
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet={injektionen_tablet.src}
                        />
                        <Image
                            className={scss.image}
                            src={injektionen}
                            alt="Injektionen photo"
                        />
                    </picture>
                </div>
                <div className={scss.link_wrapper}>
                    <Link
                        className={scss.link}
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Alles Unsere Arbeiten in Instagrame
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default InjektionenBerlin;
