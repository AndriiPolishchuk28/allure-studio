import Container from '../Container';
import BenefitsList from './BenefitsList/BenefitsList';
import scss from './NagelDesignFindUs.module.scss';
import data from './data';
import { italiana, oooh_Baby } from '@/app/ui';
import clsx from 'clsx';

const NagelDesignFindUs = () => {
    return (
        <section className={scss.section}>
            <Container>
                <h2 className={clsx(scss.title, italiana.className)}>
                    WIE FINDEST DU DEIN PERFEKTES NAGELSTUDIO?
                </h2>
                <div className={scss.stick}></div>

                <p className={clsx(scss.subtitle, oooh_Baby.className)}>
                    Darauf solltest du achten
                </p>
                <ul className={scss.list}>
                    {data.map((item) => (
                        <BenefitsList key={item.title} {...item} />
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default NagelDesignFindUs;
