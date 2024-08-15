'use client';
import { useEffect, useState } from 'react';
import scss from './DetailService.module.scss';
import { useMedia } from '@/hooks/useMedia';
import clsx from 'clsx';

const DetailService = ({
    service,
    additional,
    price,
    price_tablet,
    additional_mobile,
    className = '',
    detail,
    detailService,
}) => {
    const { isTablet } = useMedia();
    const [displayPrice, setDisplayPrice] = useState(null);

    useEffect(() => {
        const newPrice = isTablet && price_tablet ? price_tablet : price;
        if (displayPrice !== newPrice) {
            setDisplayPrice(newPrice);
        }
    }, [isTablet, price, price_tablet, displayPrice]);

    return (
        <li className={scss.item}>
            <div
                className={clsx(
                    scss.service_info,
                    className && scss[className]
                )}
            >
                <div className={scss.service_detail_row}>
                    <h4 className={scss.service_text}>{service}</h4>
                    {detailService && (
                        <span className={scss.span}>{detailService}</span>
                    )}
                </div>
                {additional_mobile && (
                    <p
                        className={clsx(
                            scss.additional,
                            scss.additional_mobile
                        )}
                    >
                        {additional_mobile}
                    </p>
                )}
                {additional && <p className={scss.additional}>{additional}</p>}
            </div>
            <div className={scss.wrapper_detail}>
                {detail && <p className={scss.detail}>{detail}</p>}
                <p className={scss.price}>{displayPrice}</p>
            </div>
        </li>
    );
};

export default DetailService;
