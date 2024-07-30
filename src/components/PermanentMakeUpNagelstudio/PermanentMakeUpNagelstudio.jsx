import Image from 'next/image';
import Container from '../Container';
import PageTitle from '../PageTitle';
import data from './data';
import scss from './PermanentMakeUpNagelstudio.module.scss';

const PermanentMakeUpNagelstudio = () => {
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
                        <li key={id}>
                            <PageTitle style={{ textAlign: 'center' }}>
                                HEILUNGSPROZESS DER HAUT
                            </PageTitle>
                            <Image src={image} alt={title} />
                            <p className={scss.description}>{description}</p>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default PermanentMakeUpNagelstudio;
