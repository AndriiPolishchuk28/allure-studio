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

    if (!isClient) {
        return <section className={scss.section}></section>;
    }

    return (
        <section className={scss.section}>
            <ReactPlayer
                url={'https://vimeo.com/1041692624'}
                width="100%"
                height={isDesktop ? 651 : isTablet ? 348 : 220}
                playing
                muted
                loop
                onReady
                playsinline
                config={{
                    vimeo: {
                        playerOptions: {
                            responsive: true,
                        },
                    },
                }}
                className={scss.player}
            />
        </section>
    );
};

export default Hero;
