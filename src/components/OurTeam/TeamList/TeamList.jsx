import team from '../team';
import TeamItem from './TeamItem';
import scss from './TeamList.module.scss';

const TeamList = () => {
    return (
        <ul className={scss.team}>
            {team.map((item) => (
                <TeamItem key={item.id} {...item} />
            ))}
        </ul>
    );
};

export default TeamList;
