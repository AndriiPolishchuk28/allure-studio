'use client';

import CustomModal from '@/components/CustomModal';
import scss from './Readmore.module.scss';
import { useEffect, useState } from 'react';
import { useMedia } from '@/hooks/useMedia';

const ReadMore = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { isTablet, isDesktop } = useMedia();
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
                {isTablet ? (
                    <p className={scss.description}>
                        Die sich das Ziel gesetzt haben Menschen aus Berlin und
                        aller Welt ihren Wunsch nach permanenter Schönheit zu
                        erfüllen. Unser Leistungskatalog von ALLURE Permanent
                        Make up & Beauty umfasst Permanent Make- up
                        Behandlungen, Nageldesign, Wimpernverdichtung und
                        Wimpernverlängerung. Neu in unserem Angebot sind zu dem
                        Massagen.
                    </p>
                ) : (
                    <p className={scss.description}>
                        Beauty ist unsere Leidenschaft. 2022 konnten wir nun
                        endlich unser eigenes Studio im Herzen von Berlin
                        eröffnen. Wir sind ein Zusammenschluss aus sechs
                        Beauty-Experten. Die sich das Ziel gesetzt haben
                        Menschen aus Berlin und aller Welt ihren Wunsch nach
                        permanenter Schönheit zu erfüllen. Unser
                        Leistungskatalog von ALLURE Permanent Make up & Beauty
                        umfasst Permanent Make- up Behandlungen, Nageldesign,
                        Wimpernverdichtung und Wimpernverlängerung. Neu in
                        unserem Angebot sind zu dem Massagen.
                    </p>
                )}
            </CustomModal>
        </>
    );
};

export default ReadMore;
