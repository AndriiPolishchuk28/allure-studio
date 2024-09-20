'use client';

import CustomModal from '@/components/CustomModal';
import scss from './MoreInfo.module.scss';
import { useEffect, useState } from 'react';
import { useMedia } from '@/hooks/useMedia';
import CustomForm from '@/components/CustomForm';

const MoreInfo = () => {
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
                className={scss.btn}
            >
                eine bewerbung hinterlassen
            </button>
            <CustomModal
                modalIsOpen={modalIsOpen}
                closeModal={() => setModalIsOpen(false)}
                termin
            >
                <div className={scss.form}>
                    <p className={scss.info_text}>
                        Fragen Sie einfach hier Ihre Informationen ein, und wir
                        werden uns bei Ihnen melden
                    </p>
                    <CustomForm />
                </div>
            </CustomModal>
        </>
    );
};

export default MoreInfo;
