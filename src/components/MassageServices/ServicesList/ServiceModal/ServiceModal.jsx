import scss from './ServiceModal.module.scss';

const ServiceModal = ({ title, titleModal, priceList }) => {
    return (
        <div className={scss.service}>
            <h3 className={scss.title}>{titleModal ? titleModal : title}</h3>

            <ul className={scss.priceList}>
                {priceList.map(({ service, time, price }, index) => (
                    <li key={index} className={scss.priceListItem}>
                        <div className={scss.titleTime}>
                            <h4 className={scss.serviceTitle}>
                                {service.includes(
                                    '(Kopf, Arme, Beine, Bauch)'
                                ) ? (
                                    <>
                                        {
                                            service.split(
                                                '(Kopf, Arme, Beine, Bauch)'
                                            )[0]
                                        }
                                        <span className={scss.specialText}>
                                            (Kopf, Arme, Beine, Bauch)
                                        </span>
                                    </>
                                ) : (
                                    service
                                )}
                            </h4>
                            <p className={scss.time}>{time}</p>
                        </div>
                        <div className={scss.timePrice}>
                            <p className={scss.timeDesk}>{time}</p>
                            <p className={scss.price}>{`${price} EURO`}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceModal;
