'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';
import BurgerMenu from './BurgerMenu';
import { useMedia } from '@/hooks/useMedia';
import scss from './Header.module.scss';
import { useEffect, useState } from 'react';

const Header = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const { isDesktop } = useMedia();
    const linkAnimation = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    };
    return (
        <header className={scss.header}>
            <div className={scss.container}>
                <div className={scss.wrapper}>
                    <Logo />
                    <BurgerMenu />
                    <Link
                        href="https://connect.shore.com/widget/allure-studio?locale=de"
                        className={scss.link}
                        target="_blank"
                    >
                        {isDesktop && isMounted ? (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 1 }}
                                variants={linkAnimation}
                            >
                                Jetzt Buchen
                            </motion.div>
                        ) : (
                            'Jetzt Buchen'
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
