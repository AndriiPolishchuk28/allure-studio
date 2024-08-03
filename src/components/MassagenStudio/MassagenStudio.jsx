import Image from 'next/image';
import Container from '../Container';
import PageTitle from '../PageTitle';
import scss from './MassagenStudio.module.scss';
import data from './data';

const MassagenStudio = () => {
    return (
        <section className={scss.section}>
            <Container>
                <div className={scss.head}>
                    <h2 className={scss.title}>
                        WIE FINDEST DU DEIN PERFEKTES NAGELSTUDIO?
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

export default MassagenStudio;
