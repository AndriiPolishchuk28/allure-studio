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
                    Grundsätzlich kann man beim Permanent Make up in zwei
                    Kategorien unterteilen. Permanent Make-up für einen
                    natürlichen Look und Permanent Make up für einen expresiven
                    Look. Die Entscheidung liegt bei dir. Gerne berate ich dich
                    dazu ausführlich in einem Telefongespräch oder Vorort bei
                    uns im Studio.
                </p>
            </CustomModal>
        </>
    );
};

export default ReadMore;
