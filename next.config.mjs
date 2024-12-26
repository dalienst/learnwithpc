/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/blessedmedia/image/upload/**',
            search: '',
          },
        ],
      },
};

export default nextConfig;
