'use client';

import { useState } from 'react';
import CustomModal from '@/components/CustomModal';
import scss from './ReadMore.module.scss';

const ReadMore = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
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
                    Meine exzellente Pigmentierungstechnik, Wissen und Erfahrung
                    machen dein Permanent Make-up zu einem langlebigen Ergebnis
                    das du lieben wirst.
                </p>
            </CustomModal>
        </>
    );
};

export default ReadMore;
