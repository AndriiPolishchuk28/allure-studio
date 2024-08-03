// import Image from 'next/image';
import PageTitle from '../PageTitle';
import ReadMore from './ReadMore';
// import photo from '@/assets/images/make-up/photo-1.png';
import scss from './PermanentMakeUpInfo.module.scss';

const PermanentMakeUpInfo = () => {
    return (
        <section className={scss.section}>
            <div className={scss.container}>
                <div className={scss.wrapper}>
                    {/* <Image
                        src={photo}
                        alt="woman"
                        priority
                        className={scss.image}
                    /> */}
                    <div className={scss.image}></div>
                    <div className={scss.info}>
                        <PageTitle>WAS IST PERMANENT MAKE-UP</PageTitle>
                        <div className={scss.description}>
                            <p className={scss.descriptionParagraph}>
                                Beim Permanent Make-up werden Farbpigmente in
                                die oberste Hautschicht impliziert. Dadurch wird
                                ein langanhaltendes Make-up, das zwischen 2-3
                                Jahren hält, geschaffen. Um diese Aufwändige
                                Behandlung perfekt auszuführen braucht man eine
                                professionelle Ausbildung und langjährige
                                Erfahrung.
                            </p>
                            <p className={scss.descriptionParagraphAdditional}>
                                Grundsätzlich kann man beim Permanent Make up in
                                zwei Kategorien unterteilen. Permanent Make-up
                                für einen natürlichen Look und Permanent Make up
                                für einen expresiven Look. Die Entscheidung
                                liegt bei dir. Gerne berate ich dich dazu
                                ausführlich in einem Telefongespräch oder Vorort
                                bei uns im Studio.
                            </p>
                        </div>

                        <ReadMore />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PermanentMakeUpInfo;
