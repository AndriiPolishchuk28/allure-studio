'use client';
import { useEffect, useState } from 'react';
import scss from './ServicesList.module.scss';
import { useMedia } from '@/hooks/useMedia';
import clsx from 'clsx';

const ServicesList = ({
    service,
    additional,
    price,
    price_tablet,
    additional_mobile,
    className = '',
}) => {
    const { isTablet, isMobile } = useMedia();
    const [displayAdditional, setDisplayAdditional] = useState(null);
    const [displayPrice, setDisplayPrice] = useState(null);
    useEffect(() => {
        if (isMobile && additional_mobile) {
            setDisplayAdditional(additional_mobile);
        } else {
            setDisplayAdditional(additional);
        }
        if (isTablet && price_tablet) {
            setDisplayPrice(price_tablet);
        } else {
            setDisplayPrice(price);
        }
    }, [
        isMobile,
        additional_mobile,
        additional,
        isTablet,
        price,
        price_tablet,
    ]);

    return (
        <li className={scss.item}>
            <div
                className={clsx(
                    scss.service_info,
                    className && scss[className]
                )}
            >
                <h4 className={scss.service_text}>{service}</h4>
                {/* <span></span> */}
                {displayAdditional && (
                    <p className={scss.additional}>{displayAdditional}</p>
                )}
            </div>
            <p className={scss.price}>{displayPrice}</p>
        </li>
    );
};

export default ServicesList;
