'use client';
import ReactPlayer from 'react-player/vimeo';
import scss from './ServicesItem.module.scss';
import Link from 'next/link';

const ServicesItem = ({ label, path, link }) => {
    return (
        <li className={scss.video}>
            <Link href={link}>
                <div className={scss.playerWrapper}>
                    <ReactPlayer
                        url={path}
                        width="100%"
                        playing
                        muted
                        loop
                        onReady
                        playsinline
                    />
                </div>
                <span className={scss.linkText}>{label}</span>
            </Link>
        </li>
    );
};

export default ServicesItem;
