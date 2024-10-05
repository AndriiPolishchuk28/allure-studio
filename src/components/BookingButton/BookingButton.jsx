'use client';

import Link from 'next/link';
import scss from './BookingButton.module.scss';
import { useEffect, useState } from 'react';
import { useMedia } from '@/hooks/useMedia';
import closeIcon from '@/assets/closeTermin.svg';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const BookingButton = () => {
    const [showModal, setShowModal] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const { isDesktop } = useMedia();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const openModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            {isMounted && (
                <>
                    {!isDesktop && (
                        <Link
                            href="https://connect.shore.com/widget/allure-studio?locale=de"
                            className={scss.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Jetzt Buchen
                        </Link>
                    )}
                    {isDesktop && (
                        <motion.button
                            onClick={openModal}
                            className={scss.link}
                            initial={{ width: '170px' }}
                            animate={{ width: showModal ? '50px' : '170px' }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            style={{
                                overflow: 'hidden',
                                height: '52px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {!showModal ? (
                                    <motion.span
                                        key="text"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={scss.text}
                                        style={{
                                            display: 'inline-block',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        Jetzt Buchen
                                    </motion.span>
                                ) : (
                                    <Image
                                        src={closeIcon}
                                        alt="Close icon"
                                        className={scss.closeIcon}
                                    />
                                )}
                            </AnimatePresence>
                        </motion.button>
                    )}
                    {showModal && (
                        <motion.div
                            className={scss.wrapper_popup}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <iframe
                                src="https://connect.shore.com/widget/allure-studio?locale=de"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    border: 'none',
                                }}
                                title="Booking Widget"
                            />
                        </motion.div>
                    )}
                </>
            )}
        </>
    );
};

export default BookingButton;
