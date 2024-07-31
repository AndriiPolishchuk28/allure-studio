import { service_1, service_2, service_3 } from '@/assets/images/massage';

const services = [
    {
        id: 1,
        title: 'ANTISTRESS-MASSAGE BODY (CLASSIC)',
        titleModal: 'ALLGEMEINE MASSAGE',
        image: service_1,
        description:
            'Bei unserer Anti-Stress-Massage, könnt ihr den ganzen Stress des berliner Alltags hinter euch lassen und ein Retreat für euren ganzen Körper und damit auch für eure Seele gönnen. Kommt in unser Studio in der Mitte von Berlin und lasst euch verwöhnen.',
        priceList: [
            {
                service: 'ALLGEMEINE MASSAGE',
                time: '60 / 90 MIN',
                price: '65 / 90',
            },
            {
                service: 'ALLGEMEINE ENTSPANNENDE MASAGE',
                time: '90 MIN',
                price: '90',
            },
            {
                service: 'STONE MASSAGE ',
                time: '90 MIN',
                price: '120',
            },
        ],
    },

    {
        id: 2,
        title: 'lokal MASSAGE',
        image: service_2,
        description:
            'Gerade wenn du in einem Büro tätig bist, sind das die Regionen, die besonders strapaziert werden. Gönne deinem Körper etwas gutes und lass die Verspannungen von uns mit einer professionellen Rücken-und Nacken-Massage lösen.',
        priceList: [
            {
                service: 'RÜCKEN UND NACKENMASSAGE',
                time: '45 MIN',
                price: '50',
            },
            {
                service: 'LOKAL MASSAGE (Kopf, Arme, Beine, Bauch)',
                time: '30 MIN',
                price: '35',
            },
        ],
    },

    {
        id: 3,
        title: 'ANTI-CELLUILITE MASSAGE',
        image: service_3,
        description:
            'Unsere Anti-Cellulite-Massage in Berlin hilft deinem Körper Ansammlungen von Wasser und Toxine, die rund um die Anlagerungen von Fett in den betroffenen Zonen entstehen abzubauen. Die Anti-Cellulite-Massage fördert die Durchblutung und dein Hautbild wird glatter und gesünder',
        priceList: [
            {
                service: 'ANTICELLUILITE MASSAGE',
                time: '45 MIN',
                price: '60',
            },
        ],
    },
];

export default services;
