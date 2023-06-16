/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
            {
                source: '/blog',
                destination: '/work-in-progress',
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig
