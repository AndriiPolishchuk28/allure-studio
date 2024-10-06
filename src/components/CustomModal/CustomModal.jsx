import Image from 'next/image';
import clsx from 'clsx';
import { Backdrop, Fade, Modal } from '@mui/material';
import closeIcon from '@/assets/close.svg';
import scss from './CustomModal.module.scss';

const CustomModal = ({
    modalIsOpen,
    closeModal,
    children,
    full = false,
    secondary = false,
    termin = false,
}) => {
    return (
        <Modal
            open={modalIsOpen}
            onClose={closeModal}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition
            disablePortal
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={modalIsOpen}>
                <div className={clsx(scss.wrapper, full && scss.fullScreen)}>
                    <div
                        className={clsx(
                            scss.content,
                            full && scss.fullScreen,
                            secondary && scss.secondary,
                            termin && scss.termin
                        )}
                    >
                        <button
                            onClick={closeModal}
                            className={scss.closeButton}
                        >
                            <Image
                                src={closeIcon}
                                alt="close icon"
                                className={scss.closeIcon}
                            />
                        </button>
                        <div className={full && scss.fullScreenContent}>
                            {children}
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};

export default CustomModal;
