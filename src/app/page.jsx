import OurTeam from '@/components/OurTeam';
import Permanent from '@/components/Permanent/Permanent';
import dynamic from 'next/dynamic';

const ServicesVideo = dynamic(() => import('../components/Services'), {
    ssr: false,
});

const Home = () => {
    return (
        <main>
            <OurTeam />
            <Permanent />
            <ServicesVideo />
        </main>
    );
};

export default Home;
