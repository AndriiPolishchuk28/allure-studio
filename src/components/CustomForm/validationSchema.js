import * as yup from 'yup';

const validationSchema = yup.object({
    fullName: yup
        .string()
        .required('Vollständiger Name ist erforderlich*')
        .min(2, 'Der Name muss mindestens 2 Zeichen lang sein'),
    email: yup
        .string()
        .required('E-Mail ist erforderlich*')
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'E-Mail ist nicht gültig'
        ),
    phone: yup
        .string()
        .required('Telefonnummer ist erforderlich*')
        .matches(/^[0-9,+]{1,14}$/, 'Telefonnummer ist nicht gültig'),
    subject: yup.string(),
    message: yup
        .string()
        .required('Nachricht ist erforderlich*')
        .min(10, 'Die Nachricht muss mindestens 10 Zeichen lang sein'),
    checkbox: yup
        .boolean()
        .oneOf([true], 'Sie müssen die Datenschutzrichtlinie akzeptieren*'),
});

export default validationSchema;
