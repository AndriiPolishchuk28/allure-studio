// import Link from 'next/link';
// import ReactPlayer from 'react-player';
import scss from './ServicesItem.module.scss';
import '../../../styles/globals.scss';

const ServicesItem = ({ path, label }) => {
    return (
        <div className={scss.item}>
            {/* <Link href={link}> */}
            <iframe
                src={`${path}?background=1&autoplay=1&loop=1`}
                frameBorder="0"
                allow="autoplay"
                width={200}
                height={239}
                style={{ aspectRatio: '16/9', objectFit: 'cover' }}
            ></iframe>
            {/* </Link> */}
            <p className={scss.label}>{label}</p>
        </div>
    );
};

export default ServicesItem;
