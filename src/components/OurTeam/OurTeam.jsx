import Container from '../Container';
import Title from '../Title';
import scss from './OurTeam.module.scss';
import TeamList from './TeamList';

const OurTeam = () => {
    return (
        <section className={scss.team}>
            <Container>
                <Title>unser team</Title>
                <TeamList />
            </Container>
        </section>
    );
};

export default OurTeam;
