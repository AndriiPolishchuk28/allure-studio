import {
    image_1_after,
    image_1_before,
    image_2_after,
    image_2_before,
    image_3_after,
    image_3_before,
    image_4_after,
    image_4_before,
    lifting_1_after,
    lifting_1_before,
    lifting_2_after,
    lifting_2_before,
    lips_1_after,
    lips_1_before,
    lips_2_after,
    lips_2_before,
    lips_3_after,
    lips_3_before,
    service_1,
    service_2,
    service_3,
    service_4,
    softliner_1_after,
    softliner_1_before,
    softliner_2_after,
    softliner_2_before,
} from '@/assets/images/make-up';

const services = [
    {
        id: 1,
        title: 'MAKE-UP AUGENBRAUEN',
        description:
            'Dauerhaft perfekte Augenbrauen! Präzise Form und Farbe, individuell angepasst, für einen natürlichen oder intensiven Look. Langanhaltende Schönheit und Zeitersparnis – professionell umgesetzt!',
        image: service_1,
        descriptionModal:
            'In unserem Beautystudio Allure Permanent Make-up & Beauty bieten wir auch nicht permanente Lösungen für deine Schönheit an. Dazu gehört unsere wunderbaren Beautybehandlung rund um deine Augenbrauen. Dabei bieten wir dir eine umfangreiche Beratung. Du kannst entscheiden, ob du deine Augenbrauen zupfen oder deine Augenbrauen färben möchtest. Das komplette Paket erhältst du mit unserem Perfect-Brow-Styling. Perfekte Augenbrauen für deinen Alltag.',
        imagesList: [
            {
                before: image_1_before,
                after: image_1_after,
            },
            {
                before: image_2_before,
                after: image_2_after,
            },
            {
                before: image_3_before,
                after: image_3_after,
            },
            {
                before: image_4_before,
                after: image_4_after,
            },
        ],
        priceList: [
            {
                service: 'MASTER POWDER BROW',
                processing: 'Erstbehaldung',
                time: '2 ST',
                price: 250,
            },
            {
                service: 'MASTER POWDER BROW',
                processing: 'Nachbehaldung',
                time: '2 ST',
                price: 100,
            },
            {
                service: 'NANO BROWS',
                processing: 'Erstbehaldung',
                time: '2 ST',
                price: 350,
            },
            {
                service: 'NANO BROWS',
                processing: 'Nachbehaldung',
                time: '2 ST',
                price: 150,
            },
            {
                service: 'AUGENBRAUEN ZUPFEN',
                time: '10 min',
                price: 15,
            },
            {
                service: 'BROW NUR FÄRBEN',
                time: '10 min',
                price: 30,
            },
            {
                service: 'BROW LIFTING',
                time: '10 min',
                price: 49,
            },
        ],
    },

    {
        id: 2,
        title: 'MAKE-UP LIPPEN',
        description:
            'Für vollere, definierte Lippen! Dauerhafte Lippenkonturen und sanfte Schattierungen, die Ihre natürliche Lippenform betonen und Farbe langanhaltend intensivieren. Perfekt für einen pflegeleichten und frischen Look!',
        image: service_2,
        descriptionModal:
            'Permanent Make up für deine Lippen werden für dich eine Bereicherung sein für deine Daily-Beauty-Routin. Durch das Permanent-Lippen können asymetirsche Lippenformen korrigiert, dein Mund mehr Volumen oder auch weniger Volumen erhalten. Es kommt auf deinen Wunsch an. Was du möchtest und was zu deinem Typ passt. Auch die Stärke und Farbe der Farbpigmente wirst du nach einen ausführlich Beratungsgespräch wählen. Komm zu deinem Beratungsgespräch in unser Beauty-Studio in Berlin Mitte.',
        imagesList: [
            {
                before: lips_1_before,
                after: lips_1_after,
            },
            {
                before: lips_2_before,
                after: lips_2_after,
            },
            {
                before: lips_3_before,
                after: lips_3_after,
            },
        ],
        priceList: [
            {
                service: 'VELVET LIPS',
                processing: 'Erstbehaldung',
                time: '2,5 ST',
                price: 300,
            },
            {
                service: 'VELVET LIPS',
                processing: 'Nachbehaldung',
                time: '2 ST',
                price: 120,
            },
            {
                service: 'AQUARELL LIPS',
                processing: 'Erstbehaldung',
                time: '2,5 ST',
                price: 270,
            },
            {
                service: 'AQUARELL LIPS',
                processing: 'Nachbehaldung',
                time: '2,5 ST',
                price: 100,
            },
        ],
    },

    {
        id: 3,
        title: 'MAKE-UP LIDSTRICH',
        titleModal: 'MAKE-UP LIDSTRICH/ SOFTLINER',
        description:
            'Ein perfekt gezogener Lidstrich für intensiven Augenaufschlag! Dauerhafte Eyeliner-Applikation, die Ihre Augenform betont und den Blick verstärkt. Ideal für langanhaltende Schönheit und weniger Make-up-Aufwand täglich.',
        image: service_3,
        descriptionModal:
            'Mit der Softliner-Technik erzeugen wir mit dem Permanent Make-up den Effekt eines Lidstriches, der mit einem Lidschatten geschminkt worden ist. Durch die verschiedene Pigmentdichte wird eine Farbabstufung und damit eine Schattierung am Lid geschaffen. Die Form, Farbe, Größe werden wir in einem persönlichen Gespräch typgerecht festlegen. Durch dieses Permanent Make-up Methode werden deine Augen bis zu 3 Jahren betont. Ein Make-up, dass auch dem Sommer-Badespaß standhält.',
        imagesList: [
            {
                before: softliner_1_before,
                after: softliner_1_after,
            },
            {
                before: softliner_2_before,
                after: softliner_2_after,
            },
        ],
        priceList: [
            {
                service: 'SOFT LINER',
                processing: 'Erstbehaldung',
                time: '2,5 ST',
                price: 270,
            },
            {
                service: 'SOFT LINER',
                processing: 'Nachbehaldung',
                time: '2 ST',
                price: 100,
            },
        ],
    },

    {
        id: 4,
        title: 'lifting',
        description:
            'Erleben Sie die Perfektion Ihres Permanent Make-ups mit unserem speziellen Lifting-Service. Unsere Experten verleihen Ihrem Make-up eine neue Frische und Langlebigkeit. Buchen Sie jetzt und genießen Sie ein dauerhaft strahlendes Aussehen.',
        image: service_4,
        descriptionModal:
            'Unser Lifting-Service für Permanent Make-up bietet Ihnen die perfekte Lösung, um Ihrem bestehenden Make-up neuen Glanz und Frische zu verleihen. Diese innovative Behandlung revitalisiert die Pigmente, intensiviert die Farben und verlängert die Haltbarkeit Ihres Permanent Make-ups. Unsere erfahrenen Fachkräfte sorgen dafür, dass Ihr Make-up wieder wie neu aussieht und Sie sich rundum wohlfühlen. Ideal, um verblasste Farben aufzufrischen und die Konturen zu verstärken.',
        imagesList: [
            {
                before: lifting_1_before,
                after: lifting_1_after,
            },
            {
                before: lifting_2_before,
                after: lifting_2_after,
            },
        ],
        priceList: [
            {
                service: 'PERFECT BROW STYLING',
                processing: 'HENNA / FARBE',
                price: 45,
            },
            {
                service: 'LASH LIFTING',
                price: 49,
            },
            {
                service: 'BROW LIFTING',
                price: 49,
            },
            {
                service: 'B + L LIFTING PACKET',
                price: 90,
            },
            {
                service: 'BROW NUR FÄRBEN',
                processing: 'HENNA / FARBE',
                price: 30,
            },
            {
                service: 'BROW NUR ZUPFEN',
                price: 15,
            },
            {
                service: 'LASH NUR FÄRBEN',
                price: 19,
            },
        ],
    },
];

export default services;
