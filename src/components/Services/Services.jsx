import { Container } from '@mui/material';
import Title from '@/components/Title';
import videos from './videoLinks.json';
import scss from './Services.module.scss';
import ServicesItem from './ServicesItem';

const Services = () => {
    return (
        <section className={scss.section}>
            <Container>
                <Title>SERVICES</Title>

                <ul className={scss.list}>
                    {videos.map((video) => (
                        <ServicesItem key={video.id} {...video} />
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default Services;
