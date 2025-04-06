'use client';

import ReactPlayer from 'react-player';
import scss from './Hero.module.scss';
import { useEffect, useState } from 'react';

const Hero = () => {
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
                height={651}
                playing
                muted
                loop
                onReady
                playsinline
                config={{
                    vimeo: {
                        playerOptions: {
                            responsive: true,
                            dnt: true,
                        },
                    },
                }}
                className={scss.player}
            />
        </section>
    );
};

export default Hero;
