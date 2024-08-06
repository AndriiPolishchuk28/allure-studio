'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';
import BurgerMenu from './BurgerMenu';
import scss from './Header.module.scss';
import { useMedia } from '@/hooks/useMedia';

const Header = () => {
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
                    <Link href="#" className={scss.link}>
                        {isDesktop ? (
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
