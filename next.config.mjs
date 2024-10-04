// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cloud.appwrite.io',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'yt3.ggpht.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'pbs.twimg.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'tzupkqiuzvqpqvyevywz.supabase.co',
          pathname: '/**',
        },
      ],
    },
  };
  export default nextConfig;
  