import dynamic from 'next/dynamic';
import Location from '@/components/Location';
import OurTeam from '@/components/OurTeam';
import Permanent from '@/components/Permanent/Permanent';

const ServicesVideo = dynamic(() => import('../components/Services'), {
    ssr: false,
});

const Home = () => {
    return (
        <main>
            <Permanent />
            <ServicesVideo />
            <OurTeam />
            <Location />
        </main>
    );
};

export default Home;
