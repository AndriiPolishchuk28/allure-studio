import Image from 'next/image';
import clsx from 'clsx';
import Container from '../Container';
import PageTitle from '../PageTitle';
import data from './data';
import { italiana, oooh_Baby } from '@/app/ui';
import scss from './PermanentMakeUpChoiceMaster.module.scss';

const PermanentMakeUpNagelstudio = () => {
    return (
        <section className={scss.section}>
            <Container>
                <div className={scss.head}>
                    <h2 className={clsx(italiana.className, scss.title)}>
                        DIE RICHTIGE WAHL BEIM PERMANTENT MAKE-UP-ARTIST
                    </h2>
                    <p className={clsx(oooh_Baby.className, scss.subtitle)}>
                        Darauf solltest du achten
                    </p>
                </div>

                <ul className={scss.list}>
                    {data.map(({ id, title, image, description }) => (
                        <li key={id} className={scss.item}>
                            <Image
                                src={image}
                                alt={title}
                                className={scss.image}
                            />
                            <div className={scss.text_wrapper}>
                                <PageTitle className={scss.pageTitle}>
                                    {title}
                                </PageTitle>
                                <p className={scss.description}>
                                    {description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default PermanentMakeUpNagelstudio;
