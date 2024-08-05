import PageTitle from '@/components/PageTitle';
import CustomForm from '@/components/CustomForm';
import scss from './ContactsForm.module.scss';

const ContactsForm = () => {
    return (
        <section className={scss.section}>
            <PageTitle className={scss.pageTitle}>
                haben sie fragen? KONTAKTIERE uns
            </PageTitle>
            <CustomForm />
        </section>
    );
};

export default ContactsForm;
