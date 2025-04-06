import Container from '../Container';
import Title from '../Title';
import PriceItem from './PriceItem';
import scss from './PriceList.module.scss';
import {
    permanent,
    nageldesign,
    massage,
    injektionen,
    augenbrauen,
} from './data';
import BotulinumList from '../InjektionenServices/ServicesList/ServicesList';
import { botulinum } from '../InjektionenServices/ServicesList/data';
import PageTitle from '../PageTitle';
import { nanoid } from 'nanoid';

const PriceList = () => {
    const test = {
        listTablet: 'list_tablet',
        customWidth: 'custom_width',
    };
    return (
        <section className={scss.section}>
            <Container>
                <Title className={scss.title}>preisliste</Title>
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
                <Title className={scss.title_service}>massage</Title>
                <div className={scss.list_wrapper}>
                    {massage.map((item) => (
                        <PriceItem
                            massage="massage"
                            key={nanoid()}
                            data={item.services}
                        />
                    ))}
                </div>
                <Title className={scss.title_service}>nageldesign</Title>
                <div className={scss.list_wrapper}>
                    {nageldesign.map((item) => (
                        <PriceItem
                            key={nanoid()}
                            data={item.services}
                            // className="detail_row"
                        />
                    ))}
                </div>
                <Title className={scss.title_service}>
                    augenbrauen / wimpern
                </Title>
                <div className={scss.list_wrapper}>
                    {augenbrauen.map((item) => (
                        <PriceItem
                            key={nanoid()}
                            data={item.services}
                            className="detail_row"
                        />
                    ))}
                </div>
                <Title className={scss.title_service}>Injektionen</Title>
                <div className={scss.list_wrapper}>
                    <PageTitle className={scss.subtitle}>
                        BOTULINUMTOXIN : BOCOUTURE / AYYALURE/ VISTABEL
                    </PageTitle>
                    <ul className={scss.list}>
                        {botulinum.map((item, index) => (
                            <BotulinumList key={index} {...item} />
                        ))}
                    </ul>
                    {injektionen.map(({ header, services }) => (
                        <PriceItem
                            className={test}
                            key={nanoid()}
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
