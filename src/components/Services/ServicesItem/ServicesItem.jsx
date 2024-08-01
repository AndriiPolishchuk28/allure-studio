// import Link from 'next/link';
import ReactPlayer from 'react-player';
import scss from './ServicesItem.module.scss';
import '../../../styles/globals.scss';
// import { useRef, useEffect } from 'react';

const ServicesItem = ({ path, label }) => {
    // const iframe = useRef(null);
    // useEffect(() => {
    //     if (iframe.current) {
    //         const iframeDocument = iframe.current.contentDocument;
    //         // iframeDocument.body.style.width = '200px';
    //     } else {
    //         console.log('iframeRef.current is null');
    //     }
    // }, []);

    return (
        <li className={scss.main_wrapper}>
            {/* <Link href={link}> */}
            {/* <iframe
                        ref={iframe}
                        src={`${path}?background=1&autoplay=1&loop=1`}
                        frameBorder="0"
                        allow="autoplay"
                        className={scss.iframe}
                        width="200px"
                    ></iframe> */}
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
