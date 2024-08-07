import Container from '../Container';
import BotulinumList from './ServicesList';
import PageTitle from '../PageTitle';
import Title from '../Title';
import scss from './InjektionenServices.module.scss';
import { botulinum, mesotherapie, hyaluronsaure } from './ServicesList/data';

const InjektionenServices = () => {
    return (
        <section className={scss.section}>
            <Container>
                <Title className={scss.title}>SERVICES</Title>
                <div className={scss.list_wrapper}>
                    <PageTitle className={scss.subtitle}>
                        BOTULINUMTOXIN : BOCOUTURE / AYYALURE/ VISTABEL
                    </PageTitle>
                    <ul className={scss.list}>
                        {botulinum.map((item, index) => (
                            <BotulinumList key={index} {...item} />
                        ))}
                    </ul>
                    <PageTitle className={scss.subtitle}>
                        MESOTHERAPIE
                    </PageTitle>
                    <ul className={scss.list}>
                        {mesotherapie.map((item, index) => (
                            <BotulinumList key={index} {...item} />
                        ))}
                    </ul>
                    <PageTitle className={scss.subtitle}>
                        HYALURONISÄURE (1 ML)
                    </PageTitle>
                    <ul className={scss.list}>
                        {hyaluronsaure.map((item, index) => (
                            <BotulinumList key={index} {...item} />
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default InjektionenServices;
