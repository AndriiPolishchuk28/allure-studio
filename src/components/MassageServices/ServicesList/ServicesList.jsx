'use client';

import { useState } from 'react';
import ServicesListItem from './ServicesListItem';
import CustomModal from '@/components/CustomModal';
import ServiceModal from './ServiceModal';
import services from '../services';
import scss from './ServicesList.module.scss';

const ServicesList = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [service, setService] = useState(null);

    const handleClick = (id) => {
        setService(services.find((item) => item.id === id));
        setModalIsOpen(true);
    };

    return (
        <>
            <ul className={scss.list}>
                {services.map((item) => (
                    <ServicesListItem
                        key={item.id}
                        {...item}
                        onClick={handleClick}
                    />
                ))}
            </ul>

            {service && (
                <CustomModal
                    modalIsOpen={modalIsOpen}
                    closeModal={() => setModalIsOpen(false)}
                    secondary
                >
                    <ServiceModal {...service} />
                </CustomModal>
            )}
        </>
    );
};

export default ServicesList;
