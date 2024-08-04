import * as yup from 'yup';

const validationSchema = yup.object({
    fullName: yup
        .string()
        .required('Vollständiger Name ist erforderlich*')
        .min(2, 'Der Name muss mindestens 2 Zeichen lang sein'),
    email: yup
        .string()
        .required('E-Mail ist erforderlich*')
        .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'E-Mail ist nicht gültig'),
    phone: yup
        .string()
        .required('Telefonnummer ist erforderlich*')
        .matches(/^\+?[1-9]\d{1,14}$/, 'Telefonnummer ist nicht gültig'),
    subject: yup
        .string()
        .required('Betreff ist erforderlich*')
        .min(5, 'Der Betreff muss mindestens 5 Zeichen lang sein'),
    message: yup
        .string()
        .required('Nachricht ist erforderlich*')
        .min(10, 'Die Nachricht muss mindestens 10 Zeichen lang sein'),
    checkbox: yup
        .boolean()
        .oneOf([true], 'Sie müssen die Datenschutzrichtlinie akzeptieren*'),
});

export default validationSchema;
