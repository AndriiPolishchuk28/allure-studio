import Image from 'next/image';
import Container from '../Container';
import PageTitle from '../PageTitle';
import data from './data';
import scss from './PermanentMakeUpChoiceMaster.module.scss';

const PermanentMakeUpNagelstudio = () => {
    return (
        <section className={scss.section}>
            <Container>
                <div className={scss.head}>
                    <h2 className={scss.title}>
                        DIE RICHTIGE WAHL BEIM PERMANTENT MAKE-UP-ARTIST
                    </h2>
                    <p className={scss.subtitle}>Darauf solltest du achten</p>
                </div>

                <ul className={scss.list}>
                    {data.map(({ id, title, image, description }) => (
                        <li key={id} className={scss.item}>
                            <Image
                                src={image}
                                alt={title}
                                className={scss.image}
                            />
                            <div>
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
