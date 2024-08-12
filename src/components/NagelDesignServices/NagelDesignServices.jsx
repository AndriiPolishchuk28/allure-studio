'use client';

import { useState } from 'react';
import Container from '../Container';
import CustomModal from '../CustomModal';
import Title from '../Title';
import scss from './NagelDesignServices.module.scss';
import ServiceItem from './ServiceItem';
import ServiceModal from './ServiceModal/ServiceModal';
import services from './data';

const NagelDesignServices = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [info, setInfo] = useState(null);
    const handleClick = (id) => {
        setInfo(services.find((item) => item.id === id));
        setModalIsOpen(true);
    };
    return (
        <section className={scss.section}>
            <Container>
                <Title line style={{ marginBottom: '0' }}>
                    Services
                </Title>
                <ul className={scss.list}>
                    {services.map((item) => (
                        <ServiceItem
                            handleClick={handleClick}
                            key={item.id}
                            {...item}
                        />
                    ))}
                </ul>
                {info && (
                    <CustomModal
                        modalIsOpen={modalIsOpen}
                        closeModal={() => setModalIsOpen(false)}
                        secondary
                    >
                        <ServiceModal item={info} />
                    </CustomModal>
                )}
            </Container>
        </section>
    );
};

export default NagelDesignServices;
