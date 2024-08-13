import Container from '../Container';
import Title from '../Title';
import PriceItem from './PriceItem';
import scss from './PriceList.module.scss';
import { permanent, nageldesign, massage, injektionen } from './data';

const PriceList = () => {
    return (
        <section className={scss.section}>
            <Container>
                <Title className={scss.title}>preiseliste</Title>
                <Title className={scss.title_service}>permanent make up</Title>
                <div className={scss.list_wrapper}>
                    {permanent.map(({ header, services }) => (
                        <PriceItem
                            key={header}
                            title={header}
                            data={services}
                        />
                    ))}
                </div>
                <Title className={scss.title_service}>nageldesign</Title>
                <div className={scss.list_wrapper}>
                    {nageldesign.map((item, index) => (
                        <PriceItem
                            key={index}
                            data={item.services}
                            className="detail_row"
                        />
                    ))}
                </div>
                <Title className={scss.title_service}>massage</Title>
                <div className={scss.list_wrapper}>
                    {massage.map((item, index) => (
                        <PriceItem key={index} data={item.services} />
                    ))}
                </div>
                <Title className={scss.title_service}>Injektionen</Title>
                <div className={scss.list_wrapper}>
                    {injektionen.map(({ header, services }, index) => (
                        <PriceItem
                            className="list_tablet"
                            key={index}
                            title={header}
                            data={services}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default PriceList;
