import Image from 'next/image';
import PageTitle from '../PageTitle';
import ReadMore from './ReadMore';
import scss from './PermanentMakeUpInfo.module.scss';
import { info } from '@/assets/images/make-up';

const PermanentMakeUpInfo = () => {
    return (
        <section className={scss.section}>
            <div className={scss.container}>
                <div className={scss.wrapper}>
                    <div className={scss.imageWrapper}>
                        <Image
                            src={info}
                            alt="woman"
                            priority
                            className={scss.image}
                        />
                    </div>
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
                                Erfahrung.{' '}
                                <span className={scss.descriptionSpan}>
                                    Grundsätzlich kann man beim Permanent Make
                                    up in zwei Kategorien unterteilen
                                </span>
                            </p>
                            <p className={scss.descriptionParagraphAdditional}>
                                Grundsätzlich kann man beim Permanent Make up in
                                zwei Kategorien unterteilen. Permanent Make up
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
