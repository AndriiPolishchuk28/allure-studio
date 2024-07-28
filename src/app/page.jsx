import Permanent from '@/components/Permanent/Permanent';
import dynamic from 'next/dynamic';

const ServicesVideo = dynamic(() => import('../components/Services'), {
    ssr: false,
});

const Home = () => {
    return (
        <main>
            <Permanent />
            <ServicesVideo />
        </main>
    );
};

export default Home;
