const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: `
                        default-src 'self';
                        script-src 'self' 'unsafe-inline' https://player.vimeo.com;
                        style-src 'self' 'unsafe-inline';
                        img-src 'self' data:;
                        media-src 'self' https://player.vimeo.com;
                        frame-src 'self' https://player.vimeo.com;
                        connect-src 'self' https://vimeo.com https://player.vimeo.com;
                      `
                            .replace(/\s{2,}/g, ' ')
                            .trim(),
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
