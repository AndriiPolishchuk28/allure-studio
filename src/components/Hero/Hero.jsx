'use client';

import ReactPlayer from 'react-player';
import scss from './Hero.module.scss';
import { useMedia } from '@/hooks/useMedia';
import { useEffect, useState } from 'react';

const Hero = () => {
    const { isTablet, isDesktop } = useMedia();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const getVideoUrl = () => {
        if (isTablet) return 'https://vimeo.com/1011935582';
        if (isDesktop) return 'https://vimeo.com/1011935599';
        return 'https://vimeo.com/1040328579';
    };

    if (!isClient) {
        return <section className={scss.section}></section>;
    }

    return (
        <section className={scss.section}>
            <ReactPlayer
                url={getVideoUrl()}
                width={'100%'}
                height={isDesktop ? 651 : isTablet ? 403 : 220}
                playing
                muted
                loop
                onReady
                playsinline
            />
        </section>
    );
};

export default Hero;
