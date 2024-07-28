// import Link from 'next/link';
import ReactPlayer from 'react-player';
import scss from './ServicesItem.module.scss';
import '../../../styles/globals.scss';


const ServicesItem = ({ path, label }) => {
    return (
        <li className={scss.item}>
            {/* <Link href={link}> */}
            <ReactPlayer
                className={scss.video_player}
                url={path}
                playing
                loop
                width={200}
            />
            {/* </Link> */}
            <p className={scss.label}>{label}</p>
        </li>
    );
};

export default ServicesItem;
