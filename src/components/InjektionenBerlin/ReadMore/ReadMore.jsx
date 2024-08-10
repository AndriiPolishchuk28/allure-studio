'use client';

import CustomModal from '@/components/CustomModal';
import scss from './ReadMore.module.scss';
import { useEffect, useState } from 'react';
import { useMedia } from '@/hooks/useMedia';

const ReadMore = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { isDesktop, isMobile, isTablet } = useMedia();

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
                {isMobile && (
                    <p className={scss.description}>
                        reduziert und mit der Filling-Methode werden eure zum
                        Beispiel Lippen aufgefüllt. All diese Anwendungen werden
                        fachmännisch von unserer Ärztin Iryna durchgeführt.
                    </p>
                )}

                {isTablet && (
                    <p className={scss.description}>
                        All diese Anwendungen werden fachmännisch von unserer
                        Ärztin Iryna durchgeführt.
                    </p>
                )}
            </CustomModal>
        </>
    );
};

export default ReadMore;
