'use client';

import Image from 'next/image';
import closeIcon from '@/assets/close.svg';
import Container from '../Container';
import scss from './CustomModal.module.scss';
import { Backdrop, Fade, Modal } from '@mui/material';

const CustomModal = ({ modalIsOpen, closeModal, children }) => {
    return (
        <Modal
            open={modalIsOpen}
            onClose={closeModal}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={modalIsOpen}>
                <div>
                    <Container>
                        <div className={scss.content}>
                            <button
                                onClick={closeModal}
                                className={scss.closeButton}
                            >
                                <Image
                                    src={closeIcon}
                                    alt="close icon"
                                    className={closeIcon}
                                />
                            </button>

                            {children}
                        </div>
                    </Container>
                </div>
            </Fade>
        </Modal>
    );
};

export default CustomModal;
