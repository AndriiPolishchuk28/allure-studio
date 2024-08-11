'use client';

import scss from './PriceItem.module.scss';
import DetailService from './DetailService';
import PageTitle from '@/components/PageTitle';

const ServicesList = ({ title = '', data, className = '' }) => {
    return (
        <div className={scss.section}>
            {title && (
                <PageTitle className={scss.page_title}>{title}</PageTitle>
            )}
            <ul className={scss.list}>
                {data.map((item, index) => (
                    <DetailService
                        className={className}
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ServicesList;
