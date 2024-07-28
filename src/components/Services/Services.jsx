'use client';

import scss from './Services.module.scss';
// import links from './videoLinks.json';
// import ServicesItem from './ServicesItem/ServicesItem';
import CardCover from '@mui/joy/CardCover';

const Services = () => {
    return (
        <div className={scss.wrapper_services}>
            <h2 className={scss.title}>Services</h2>
            <ul className={scss.list_wrapper}>
                {/* {links.map(({ label, path, link }) => (
                    <ServicesItem
                        key={label}
                        label={label}
                        path={path}
                        link={link}
                    />
                ))} */}
                <CardCover>
                    <iframe
                        src="https://player.vimeo.com/video/990765381?background=1&autoplay=1&loop=1"
                        width="640"
                        height="360"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                    ></iframe>
                </CardCover>
            </ul>
        </div>
    );
};

export default Services;
