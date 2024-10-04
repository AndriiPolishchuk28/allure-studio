import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingButton from '@/components/BookingButton/BookingButton';

const AdminLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
            <BookingButton />
        </div>
    );
};

export default AdminLayout;
