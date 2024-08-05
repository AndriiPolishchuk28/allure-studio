'use client';
import Link from 'next/link';
import ReactPlayer from 'react-player/vimeo';
import { useMedia } from '@/hooks/useMedia';
import scss from './ServicesItem.module.scss';

const ServicesItem = ({ label, labelDesk, path, pathTab, pathDesk, link }) => {
    const { isTablet, isDesktop } = useMedia();

    let videoUrl = path;
    let height = '360px';

    if (isTablet) {
        videoUrl = pathTab;
    } else if (isDesktop) {
        videoUrl = pathDesk;
    }

    if (isTablet) {
        height = '391px';
    } else if (isDesktop) {
        height = '580px';
    }

    return (
        <li className={scss.video}>
            <Link href={link} className={scss.link}>
                <div className={scss.playerWrapper}>
                    <ReactPlayer
                        url={videoUrl}
                        width="100%"
                        height={height}
                        playing
                        muted
                        loop
                        onReady
                        playsinline
                    />
                </div>
                <span className={scss.linkText}>
                    {isTablet && labelDesk ? labelDesk : label}
                </span>
            </Link>
        </li>
    );
};

export default ServicesItem;
