import path from 'path';
import { fileURLToPath } from 'url';

const configDir = path.dirname(fileURLToPath(import.meta.url));
const strapiApiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || process.env.STRAPI_API_URL;

const dynamicRemotePattern = (() => {
    if (!strapiApiUrl) {
        return null;
    }

    try {
        const parsed = new URL(strapiApiUrl.startsWith('http') ? strapiApiUrl : `https://${strapiApiUrl}`);
        return {
            protocol: parsed.protocol.replace(':', ''),
            hostname: parsed.hostname,
            port: parsed.port || undefined,
            pathname: '/uploads/**',
        };
    } catch {
        return null;
    }
})();

/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        root: configDir,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'beaqua-production.up.railway.app',
                pathname: '/uploads/**',
            },
            ...(dynamicRemotePattern ? [dynamicRemotePattern] : []),
        ],
    },
};

export default nextConfig;

