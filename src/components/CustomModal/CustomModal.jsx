import Image from 'next/image';
import clsx from 'clsx';
import { Backdrop, Fade, Modal } from '@mui/material';
import closeIcon from '@/assets/close.svg';
import scss from './CustomModal.module.scss';

const CustomModal = ({
    modalIsOpen,
    closeModal,
    service = false,
    children,
    nageldesign = false,
}) => {
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
                    <div
                        className={clsx(
                            scss.content,
                            service && scss.contentService
                        )}
                        style={nageldesign ? { height: 'inherit' } : {}}
                    >
                        <div className={scss.container}>
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
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};

export default CustomModal;
