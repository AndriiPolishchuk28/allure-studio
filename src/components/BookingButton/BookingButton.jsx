'use client';

// import Link from 'next/link';
import scss from './BookingButton.module.scss';
import { useState } from 'react';

const BookingButton = () => {
    const [showModal, setShowModal] = useState(false);
    console.log(showModal);
    const openModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            {/* <Link
                href="https://connect.shore.com/widget/allure-studio?locale=de"
                className={scss.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                Jetzt Buchen
            </Link> */}
            <button onClick={openModal} className={scss.link}>
                Jetzt Buchen
            </button>
            {showModal && (
                <div className={scss.wrapper_popup}>
                    <iframe
                        src="https://connect.shore.com/widget/allure-studio?locale=de"
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                        }}
                        title="Booking Widget"
                    />
                </div>
            )}
        </div>
    );
};

export default BookingButton;
