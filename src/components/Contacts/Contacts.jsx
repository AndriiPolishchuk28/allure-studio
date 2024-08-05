import Container from '../Container';
import ContactsForm from './ContactsForm';
import ContactsLocation from './ContactsLocation';
import scss from './Contacts.module.scss';

const Contacts = () => {
    return (
        <section className={scss.section}>
            <Container>
                <div className={scss.wrapper}>
                    <ContactsForm />
                    <ContactsLocation />
                </div>
            </Container>
        </section>
    );
};

export default Contacts;
