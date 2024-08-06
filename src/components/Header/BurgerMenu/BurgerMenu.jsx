'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Drawer } from '@mui/material';
import { motion } from 'framer-motion';
import Navs from '../Navs';
import closeIcon from '@/assets/close.svg';
import { useMedia } from '@/hooks/useMedia';
import scss from './BurgerMenu.module.scss';

const BurgerMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const { isMobile, isDesktop } = useMedia();
    const burgerAnimation = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    };

    const drawerWidth = isMobile ? '100%' : isDesktop ? '540px' : '376px';

    return (
        <>
            {isDesktop ? (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1 }}
                    variants={burgerAnimation}
                    className={scss.controlWrapper}
                >
                    <button
                        onClick={() => setMenuIsOpen(true)}
                        className={scss.burgerButton}
                    >
                        <svg className={scss.burgerIcon}>
                            <use href="/icons/icons.svg#icon-burger"></use>
                        </svg>
                        <span className={scss.burgerButtonText}>Menu</span>
                    </button>
                    <Link href="/" className={scss.link}>
                        Home
                    </Link>
                </motion.div>
            ) : (
                <div className={scss.controlWrapper}>
                    <button
                        onClick={() => setMenuIsOpen(true)}
                        className={scss.burgerButton}
                    >
                        <svg className={scss.burgerIcon}>
                            <use href="/icons/icons.svg#icon-burger"></use>
                        </svg>
                        <span className={scss.burgerButtonText}>Menu</span>
                    </button>
                    <Link href="/" className={scss.link}>
                        Home
                    </Link>
                </div>
            )}

            <Drawer
                open={menuIsOpen}
                onClose={() => setMenuIsOpen(false)}
                anchor={isMobile ? 'right' : 'left'}
                sx={{
                    '& .MuiPaper-root': {
                        width: drawerWidth,
                        height: `${isMobile ? 'auto' : 'none'}`,
                        bgcolor: '#e3dedb',
                    },
                }}
            >
                <div className={scss.burgerMenu}>
                    <div className={scss.container}>
                        <button
                            onClick={() => setMenuIsOpen(false)}
                            className={scss.closeButton}
                        >
                            <Image
                                src={closeIcon}
                                alt="Close icon"
                                className={scss.closeIcon}
                            />
                            <span className={scss.closeText}>Close</span>
                        </button>
                        <Navs onClose={() => setMenuIsOpen(false)} />
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default BurgerMenu;
