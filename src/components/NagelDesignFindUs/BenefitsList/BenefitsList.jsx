import Image from 'next/image';
import scss from './BenefitsList.module.scss';
import PageTitle from '@/components/PageTitle';

const BenefitsList = ({ title, image, description }) => {
    return (
        <li className={scss.item}>
            <Image className={scss.image} alt="image" src={image} />
            <div className={scss.text_wrapper}>
                <PageTitle className={scss.title}>{title}</PageTitle>
                <p className={scss.description}>{description}</p>
            </div>
        </li>
    );
};

export default BenefitsList;
