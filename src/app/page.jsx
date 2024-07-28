import Feedbacks from '@/components/Feedbacks';
import Permanent from '@/components/Permanent/Permanent';
import dynamic from 'next/dynamic';
import Location from '@/components/Location';
import OurTeam from '@/components/OurTeam';

const ServicesVideo = dynamic(() => import('../components/Services'), {
    ssr: false,
});

const Home = () => {
    return (
        <main>
            <Permanent />
            <ServicesVideo />
            <Feedbacks />
            <OurTeam />
            <Location />
        </main>
    );
};

export default Home;
