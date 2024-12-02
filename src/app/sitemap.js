const routes = [
    '/make-up',
    '/impressum',
    '/injektionen',
    '/kontaktiere',
    '/massage',
    '/nageldesign',
    '/preisliste',
    '/datenschutzerklaerung',
];

export default function sitemap() {
    return routes.map((item) => ({
        url: `${process.env.BASE_URL}${item}`,
    }));
}
