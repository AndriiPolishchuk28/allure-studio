import HomePage from './(pages)/page';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
    return (
        <main>
            <Header />
            <HomePage />
            <Footer />
        </main>
    );
};

export default Home;
