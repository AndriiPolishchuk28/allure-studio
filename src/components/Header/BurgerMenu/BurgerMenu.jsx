'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Drawer } from '@mui/material';
import Navs from '../Navs';
import closeIcon from '@/assets/close.svg';
import scss from './BurgerMenu.module.scss';
import { useMedia } from '@/hooks/useMedia';

const BurgerMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const { isMobile, isDesktop } = useMedia();

    const drawerWidth = isMobile ? '100%' : isDesktop ? '540px' : '376px';

    return (
        <>
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

            <Drawer
                open={menuIsOpen}
                onClose={() => setMenuIsOpen(false)}
                anchor={isMobile ? 'right' : 'left'}
                sx={{
                    '& .MuiPaper-root': {
                        width: drawerWidth,
                        height: `${isMobile ? 'auto' : 'none'}`,
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
