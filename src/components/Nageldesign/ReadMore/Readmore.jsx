'use client';

import CustomModal from '@/components/CustomModal';
import scss from './Readmore.module.scss';
import { useState } from 'react';

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
                    Unsere Anwendungen umfassen Maniküre und Pediküre. Wir
                    pflegen deine Nägel professionell in einer hygienisch
                    einwandfreien Umgebung. Unser Portfolio beinhaltet Pflege
                    und Reparatur, Schellack, Frenchnails, Nagelverlängerungen
                    und umwerfende Designs von dezent bis extravagant. Du
                    entscheidest über dein Nageldesign. Gerne beraten wir dich
                    auch zur Pflege deiner Hände und Fingernägel.
                </p>
            </CustomModal>
        </>
    );
};

export default ReadMore;
