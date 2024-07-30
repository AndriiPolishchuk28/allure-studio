'use client';

import scss from './Services.module.scss';
import links from './videoLinks.json';
import ServicesItem from './ServicesItem/ServicesItem';

const Services = () => {
    return (
        <div className={scss.wrapper_services}>
            <h2 className={scss.title}>Services</h2>
            <ul className={scss.list_wrapper}>
                {links.map(({ label, path, link }) => (
                    <ServicesItem
                        key={label}
                        label={label}
                        path={path}
                        link={link}
                    />
                ))}
                {/* <iframe
                    src={`https://player.vimeo.com/video/990765332?background=1&autoplay=1&loop=1`}
                    frameBorder="0"
                    allow="autoplay"
                    width={300}
                    height={239}
                ></iframe> */}
            </ul>
        </div>
    );
};

export default Services;
