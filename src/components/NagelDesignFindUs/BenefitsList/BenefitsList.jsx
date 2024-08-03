import Image from 'next/image';
import scss from './BenefitsList.module.scss';
import PageTitle from '@/components/PageTitle';

const BenefitsList = ({ title, image, description }) => {
    return (
        <li>
            <PageTitle style={{ textAlign: 'center' }}>{title}</PageTitle>
            <Image alt="image" src={image} />
            <p className={scss.description}>{description}</p>
        </li>
    );
};

export default BenefitsList;
