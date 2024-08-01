const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://player.vimeo.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; media-src 'self' https://player.vimeo.com; frame-src 'self' https://player.vimeo.com https://www.google.com;",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
