import Image from 'next/image';
import Container from '../Container';
import PageTitle from '../PageTitle';
import ReadMore from './ReadMore';
import photo from '@/assets/images/make-up/photo-1.png';
import scss from './PermanentMakeUpInfo.module.scss';

const PermanentMakeUpInfo = () => {
    return (
        <section className={scss.section}>
            <Container>
                <div className={scss.wrapper}>
                    <Image
                        src={photo}
                        alt="woman"
                        priority
                        className={scss.image}
                    />
                    <div className={scss.info}>
                        <PageTitle>WAS IST PERMANENT MAKE-UP</PageTitle>
                        <p className={scss.description}>
                            Beim Permanent Make-up werden Farbpigmente in die
                            oberste Hautschicht impliziert. Dadurch wird ein
                            langanhaltendes Make-up, das zwischen 2-3 Jahren
                            hält, geschaffen. Um diese Aufwändige Behandlung
                            perfekt auszuführen braucht man eine professionelle
                            Ausbildung, eine perfekte Technik, Präzision und
                            langjährige Erfahrung.
                        </p>
                        <ReadMore />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PermanentMakeUpInfo;
