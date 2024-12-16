import Container from '../Container';
import Title from '../Title';
import ServicesList from './ServicesList';
import scss from './PermanentMakeUpServices.module.scss';

const PermanentMakeUpServices = () => {
    return (
        <section className={scss.section}>
            <Container>
                <Title line>SERVICES</Title>
                <ServicesList />
            </Container>
        </section>
    );
};

export default PermanentMakeUpServices;
