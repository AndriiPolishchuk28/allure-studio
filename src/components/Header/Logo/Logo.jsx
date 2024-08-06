'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from '../../../assets/images/header/logo.svg';
import scss from './Logo.module.scss';
import { useMedia } from '@/hooks/useMedia';

const Logo = ({ ...props }) => {
    const [isMounted, setIsMounted] = useState(false);
    const { isDesktop } = useMedia();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className={scss.logo}></div>;
    }

    const textAnimation = {
        hidden: {
            y: 300,
            scale: 2,
        },
        visible: {
            y: 0,
            scale: 1,
        },
    };

    return (
        <Link {...props} href="/" className={scss.logo}>
            {isDesktop ? (
                <motion.div initial="hidden" whileInView="visible">
                    <motion.div
                        variants={textAnimation}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className={scss.logoWrapper}
                    >
                        <Image
                            src={logo}
                            alt="Allure"
                            priority
                            className={scss.image}
                        />
                        <span className={scss.logoTitle}>ALLURE</span>
                    </motion.div>
                </motion.div>
            ) : (
                <div className={scss.logoWrapper}>
                    <Image
                        src={logo}
                        alt="Allure"
                        priority
                        className={scss.image}
                    />
                    <span className={scss.logoTitle}>ALLURE</span>
                </div>
            )}
        </Link>
    );
};

export default Logo;
