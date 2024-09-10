/** @type {import("next").NextConfig} */

const config = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
                port: '',
                pathname: '/**',
            },
        ],
        dangerouslyAllowSVG: true, // Pridané kvôli images ktoré používam v applikácií
    },
};

export default config;
