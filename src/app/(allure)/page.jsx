import dynamic from 'next/dynamic';
import Permanent from '@/components/Permanent/Permanent';
import Hero from '@/components/Hero';
import Feedbacks from '@/components/Feedbacks';
// import OurTeam from '@/components/OurTeam';
import Location from '@/components/Location';

const ServicesVideo = dynamic(() => import('@/components/Services'), {
    ssr: false,
});

const Home = () => {
    return (
        <main>
            <Hero />
            <Permanent />
            <ServicesVideo />
            <Feedbacks />
            {/* <OurTeam /> */}
            <Location />
        </main>
    );
};

export default Home;
