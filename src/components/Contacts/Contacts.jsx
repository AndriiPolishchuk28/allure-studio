import Container from '../Container';
import scss from './Contacts.module.scss';
import ContactsForm from './ContactsForm';

const Contacts = () => {
    return (
        <section className={scss.section}>
            <Container>
                <div>
                    <ContactsForm />
                </div>
            </Container>
        </section>
    );
};

export default Contacts;
