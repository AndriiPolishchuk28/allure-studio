import Link from 'next/link';
import scss from './BookingButton.module.scss';

const BookingButton = () => {
    return (
        <div>
            <Link
                href="https://connect.shore.com/widget/allure-studio?locale=de"
                className={scss.link}
                target="_blank"
            >
                Jetzt Buchen
            </Link>
        </div>
    );
};

export default BookingButton;
