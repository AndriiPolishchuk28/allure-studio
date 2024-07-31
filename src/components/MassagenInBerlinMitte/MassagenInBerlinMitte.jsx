import Link from 'next/link';
import Image from 'next/image';
import PageTitle from '../PageTitle';
import { photo_1 } from '@/assets/images/massage';
import scss from './MassagenInBerlinMitte.module.scss';

const MassagenInBerlinMitte = () => {
    return (
        <section className={scss.section}>
            <div className={scss.container}>
                <div className={scss.wrapper}>
                    <Image
                        src={photo_1}
                        alt="massagen IN BERLIN MITTE"
                        className={scss.image}
                    />
                    <div className={scss.info}>
                        <PageTitle>massagen IN BERLIN MITTE</PageTitle>
                        <p className={scss.description}>
                            Lasse dich fallen, genieße den Moment mit unseren
                            Massagen in deiner Nähe in Berlin-Mitte. Lasst uns
                            zusammen den Alltag und den Stress hinter uns
                            lassen. Tue nur was für dich und belebe deinen
                            Körper wieder, denn er und du haben es verdient. Kom
                            in den Genuss der unvergesslichen Hände von unserem
                            zertifizierten Masseur.
                        </p>
                    </div>
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
            </div>
        </section>
    );
};

export default MassagenInBerlinMitte;
