import Image from 'next/image';
import { photo_1 } from '@/assets/images/nageldesign';
import scss from './NagelDesignBerlin.module.scss';
import PageTitle from '../PageTitle';
import ReadMore from './ReadMore';

const NagelDesignBerlin = () => {
    return (
        <div className={scss.wrapper}>
            <Image
                src={photo_1}
                alt="Nageldesign main photo"
                className={scss.image}
            />
            <div className={scss.text_wrapper}>
                <PageTitle>PERFEKTES NAGELDESIGN IN BERLIN MITTE</PageTitle>
                <p className={scss.description}>
                    Wir sind Oxana und Tanja, deine Nageldesigner in
                    Berlin-Mitte. Wir sind professionelle Nageldesigner, die
                    höchsten Wert auf Perfektion und Design legen. Zusammen
                    haben wir 10 Jahre Erfahrung als Nageldesignerin.{' '}
                </p>
                <ReadMore />
            </div>
        </div>
    );
};

export default NagelDesignBerlin;
