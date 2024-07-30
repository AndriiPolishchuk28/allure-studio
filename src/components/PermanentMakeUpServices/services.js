import {
    service_1,
    service_2,
    service_3,
    service_4,
} from '@/assets/images/make-up';

const services = [
    {
        id: 1,
        title: 'MAKE-UP AUGENBRAUEN',
        description:
            'Vertraue nur einen ausgebildeten Permanent Make-up Artisten. Die Auswahl an Permanent Make-up Artists in Berlin ist riesig. Doch bist du es dir schuldig deine Behandlung von einem Experten durchführen zu lassen. Schaue nicht nach dem günstigsten Angebot, sondern nach der Expertise des Stylisten. Denn immerhin ist dieses Make-up permanent',
        image: service_1,
        descriptionModal:
            'In unserem Beautystudio Allure Permanent Make-up & Beauty bieten wir auch nicht permanente Lösungen für deine Schönheit an. Dazu gehört unsere wunderbaren Beautybehandlung rund um deine Augenbrauen. Dabei bieten wir dir eine umfangreiche Beratung. Du kannst entscheiden, ob du deine Augenbrauen zupfen oder deine Augenbrauen färben möchtest. Das komplette Paket erhältst du mit unserem Perfect-Brow-Styling. Perfekte Augenbrauen für deinen Alltag.',
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
            'Ein Qualitätsmerkmal einer professionellen Permanent Make-up (PMu) Behandlung ist die Farb-und Typenberatung. Vor jeder Permanent Make-up Behandlung wird deine Haut-und Haarfarbe analysieren und die richtige Form und Farbe für dein Gesicht gewählt. Wir haben haben hohen Qualitätsanspruch an unser PMu-Beratung, so wirst du zufrieden sein.',
        image: service_2,
        descriptionModal:
            'Permanent Make up für deine Lippen werden für dich eine Bereicherung sein für deine Daily-Beauty-Routin. Durch das Permanent-Lippen können asymetirsche Lippenformen korrigiert, dein Mund mehr Volumen oder auch weniger Volumen erhalten. Es kommt auf deinen Wunsch an. Was du möchtest und was zu deinem Typ passt. Auch die Stärke und Farbe der Farbpigmente wirst du nach einen ausführlich Beratungsgespräch wählen. Komm zu deinem Beratungsgespräch in unser Beauty-Studio in Berlin Mitte.',
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
            'Für das lang anhaltende Permanent Make-up verwenden wir bei ALLURE mit premium Farbpigmente. Ich arbeite ausschließlich mit zertifizierte Pigmente „Reach Reglement 2022“ der Marken: Labina ( Deutschland) und Swisscolor ( Schweiz). Diese Produkte garantieren eine perfekte Farbe und sind zu dem langlebiger als Pigmente minderer Qualität.',
        image: service_3,
        descriptionModal:
            'Mit der Softliner-Technik erzeugen wir mit dem Permanent Make-up den Effekt eines Lidstriches, der mit einem Lidschatten geschminkt worden ist. Durch die verschiedene Pigmentdichte wird eine Farbabstufung und damit eine Schattierung am Lid geschaffen. Die Form, Farbe, Größe werden wir in einem persönlichen Gespräch typgerecht festlegen. Durch dieses Permanent Make-up Methode werden deine Augen bis zu 3 Jahren betont. Ein Make-up, dass auch dem Sommer-Badespaß standhält.',
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
