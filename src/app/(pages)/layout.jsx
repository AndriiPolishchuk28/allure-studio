import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AdminLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default AdminLayout;
