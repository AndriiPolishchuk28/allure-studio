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
    massage,
}) => {
    const { isTablet } = useMedia();
    const [displayPrice, setDisplayPrice] = useState(null);
    const { customWidth, listTablet } = className;

    useEffect(() => {
        const newPrice = isTablet && price_tablet ? price_tablet : price;
        if (displayPrice !== newPrice) {
            setDisplayPrice(newPrice);
        }
    }, [isTablet, price, price_tablet, displayPrice]);

    return (
        <>
            <li className={scss.item}>
                <div
                    className={clsx(
                        scss.service_info,
                        className && scss[className],
                        className && scss[listTablet],
                        massage === 'massage' && scss.massage
                    )}
                >
                    <div className={scss.service_detail_row}>
                        <h4 className={scss.service_text}>{service}</h4>
                        {additional && (
                            <p className={scss.span}>{additional}</p>
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
                    {/* {additional && (
                        <p className={scss.additional}>{additional}</p>
                    )} */}
                </div>
                <div
                    className={clsx(
                        scss.wrapper_detail,
                        className && scss[customWidth]
                    )}
                >
                    <div className={scss.test}>
                        {detail && <p className={scss.detail}>{detail}</p>}
                    </div>
                    <div className={scss.test2}>
                        <p className={scss.price}>{displayPrice}</p>
                    </div>
                </div>
            </li>
        </>
    );
};

export default DetailService;
