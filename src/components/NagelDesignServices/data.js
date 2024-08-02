import { photo1 } from '@/assets/images/nageldesign';
import { photo2 } from '@/assets/images/nageldesign';
import { photo3 } from '@/assets/images/nageldesign';

const services = [
    {
        id: '1',
        image: photo1,
        title: 'maniküre',
        description:
            'Unser Schönheitssalon bietet professionelle Maniküre an. Wählen Sie aus klassischen oder Spa-Behandlungen. Wir verwenden hochwertige Produkte für die Pflege Ihrer Nägel. Verwöhnen Sie sich und genießen Sie perfekt gepflegte Hände.',
        info: [
            {
                name: 'CLASSIC / KOMBI',
                price: '35 euro',
            },
            {
                name: 'MANIKÜRE + SCHELLACK',
                price: '50 euro',
            },
            {
                name: 'MANIKÜRE + FRENCH',
                price: '60 euro',
            },
            {
                name: 'SCHELLAK ABLÖSEN + MANIKÜRE',
                price: '40 euro',
            },
            {
                name: 'SCHELLAK ABLÖSEN',
                price: '15 euro',
            },
        ],
    },
    {
        id: '2',
        image: photo2,
        title: 'verlängerung und reparatur',
        description:
            'Unsere Dienstleistungen umfassen auch Verlängerung und Reparatur durch unser professionelles Team mit höchster Qualität.',
        info: [
            {
                name: 'VERLÄNGERUNG',
                time: '(1-2 Länge)',
                price: '70 euro',
            },
            {
                name: 'VERLÄNGERUNG',
                time: '(3-4 Länge)',
                price: '80 euro',
            },
            {
                name: 'KORREKTUR',
                time: '(1-2 Länge)',
                price: '55 euro',
            },
            {
                name: 'KORREKTUR',
                time: '(3-4 Länge)',
                price: '65 euro',
            },
            {
                name: 'REPARATUR',
                time: '(1 Nagel)',
                price: '1-5 euro',
            },
        ],
    },
    {
        id: '3',
        image: photo3,
        title: 'pediküre',
        description:
            'Allure bietet eine umfassende Pediküre, um Ihre Füße zu pflegen und zu revitalisieren. Unsere Experten verwenden hochwertige Produkte und modernste Techniken, um sicherzustellen, dass Ihre Füße gesund und geschmeidig bleiben. ',
        info: [
            {
                name: 'CLASSIC / KOMBI',
                price: '50 euro',
            },
            {
                name: 'PEDIKÜRE + SCHELLACK',
                price: '60 euro',
            },
            {
                name: 'PEDIKÜRE + SCHELLACK',
                detail: '(nür Finger)',
                price: '50 euro',
            },
            {
                name: 'PEDIKÜRE + FRENCH',
                price: '70 euro',
            },
        ],
    },
];

export default services;
