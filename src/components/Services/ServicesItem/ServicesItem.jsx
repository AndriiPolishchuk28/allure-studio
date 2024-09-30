'use client';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import { useMedia } from '@/hooks/useMedia';
import Image from 'next/image';
import { injektionen_main } from '@/assets/images/injektionen';
import scss from './ServicesItem.module.scss';

const ServicesItem = ({
    label,
    labelDesk,
    path,
    pathTab,
    pathDesk,
    link,
    image = false,
}) => {
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
            <div className={scss.playerWrapper}>
                {!image ? (
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
                ) : (
                    <Image
                        src={injektionen_main}
                        alt="injektionen"
                        className={scss.image}
                    />
                )}
            </div>
            <span className={scss.linkText}>
                {isTablet && labelDesk ? labelDesk : label}
            </span>
            <Link href={link} className={scss.link}></Link>
        </li>
    );
};

export default ServicesItem;
