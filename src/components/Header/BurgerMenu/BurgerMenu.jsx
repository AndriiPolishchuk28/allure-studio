'use client';
import { useState } from 'react';
import { Drawer } from '@mui/material';
import Container from '@/components/Container';
import Navs from '../Navs';
import scss from './BurgerMenu.module.scss';

const BurgerMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setMenuIsOpen(true)}
                className={scss.burgerButton}
            >
                <svg className={scss.burgerIcon}>
                    <use href="/icons/icons.svg#icon-burger"></use>
                </svg>
            </button>

            <Drawer
                open={menuIsOpen}
                onClose={() => setMenuIsOpen(false)}
                anchor="right"
                sx={{
                    '& .MuiPaper-root': {
                        width: '100%',
                        height: 'auto',
                    },
                }}
            >
                <div className={scss.burgerMenu}>
                    <Container>
                        <button
                            onClick={() => setMenuIsOpen(false)}
                            className={scss.closeButton}
                        >
                            X
                        </button>
                        <Navs />
                    </Container>
                </div>
            </Drawer>
        </>
    );
};

export default BurgerMenu;
