'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import logo from '../../../assets/images/header/logo.svg';
import { useMedia } from '@/hooks/useMedia';
import scss from './Logo.module.scss';
import { log } from '@/assets/images/header';
// import {
//     logo_mob_1x,
//     logo_mob_2x,
//     logo_tab_1x,
//     logo_tab_2x,
// } from '@/assets/images/header';

const Logo = ({ ...props }) => {
    const [isMounted, setIsMounted] = useState(false);
    const pathname = usePathname();
    const { isDesktop } = useMedia();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className={scss.logo}></div>;
    }

    const logoAnimation = {
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
            {isDesktop && pathname === '/' ? (
                <motion.div initial="hidden" whileInView="visible">
                    <motion.div
                        variants={logoAnimation}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className={scss.logoWrapper}
                    >
                        <img src={log} alt="Allure" className={scss.image} />
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
