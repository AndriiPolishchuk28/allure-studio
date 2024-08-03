import Container from '../Container';
import Title from '../Title';
import ServicesList from './ServicesList';
import scss from './MassageServices.module.scss';

const MassageServices = () => {
    return (
        <section className={scss.section}>
            <Container>
                <Title line>Services</Title>

                <ServicesList />
            </Container>
        </section>
    );
};

export default MassageServices;
