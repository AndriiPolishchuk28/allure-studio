import Link from 'next/link';
import Image from 'next/image';
import Container from '../Container';
import PageTitle from '../PageTitle';
import ReadMore from './ReadMore';
import photo from '@/assets/images/make-up/photo-1.png';
import scss from './PermanentMakeUpInBerlinMitte.module.scss';

const PermanentMakeUpInBerlinMitte = () => {
    return (
        <section className={scss.section}>
            <Container>
                <div className={scss.wrapper}>
                    <div className={scss.info}>
                        <PageTitle>PERMANENT MAKE UP IN BERLIN MITTE</PageTitle>
                        <p className={scss.description}>
                            Permanente Schönheit mit ALLURE Permanent Make-up &
                            Beauty. Mit meiner nun mehr als 5-jährigen Erfahrung
                            bist du in meinem Beauty Studio in Berlin Mitte an
                            der richtigen Adresse. Ich bin zertifizierte
                            Permanent Make-up Artistin, meine Passion habe ich
                            zum Beruf gemacht und möchte dir deinen Wunsch nach
                            permanenter Schönheit erfüllen.
                        </p>
                        <ReadMore />
                    </div>
                    <Image
                        src={photo}
                        alt="woman"
                        priority
                        className={scss.image}
                    />
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
            </Container>
        </section>
    );
};

export default PermanentMakeUpInBerlinMitte;
