'use client';

import { useEffect, useState } from 'react';
import CustomModal from '@/components/CustomModal';
import { useMedia } from '@/hooks/useMedia';
import scss from './ReadMore.module.scss';

const ReadMore = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { isDesktop } = useMedia();

    useEffect(() => {
        if (isDesktop) {
            setModalIsOpen(false);
        }
    }, [isDesktop]);

    return (
        <>
            <button
                type="button"
                onClick={() => setModalIsOpen(true)}
                className={scss.readMoreButton}
            >
                Mehr lesen
            </button>

            <CustomModal
                modalIsOpen={modalIsOpen}
                closeModal={() => setModalIsOpen(false)}
            >
                <p className={scss.description}>
                    Wir bieten verschieden Massage-Anwendungen an: Allgemeine
                    Wellness/Massage, Rücken und Nackenmassage, Anti-Stress
                    Bodymassage, Lokale Massage (Kopf, Arme, Beine, Bauch) und
                    unsere Anti-Celluilite-Massage.
                </p>
            </CustomModal>
        </>
    );
};

export default ReadMore;
