import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const ServicesVideo = dynamic(() => import('@/components/Services'), {
    ssr: false,
});

const Home = () => {
    return (
        <main>
            <Header />
            <ServicesVideo />
            <Footer />
        </main>
    );
};

export default Home;
