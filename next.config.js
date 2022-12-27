/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'pexels.com',
//         port: '3000',
//         pathname: '/account123/**',
//       },
//     ],
//   },
// }

module.exports =  {
  images: {
      domains: ["images.pexels.com", "dog.ceo","cleverehires.s3.amazonaws.com"]
  },
generateEtags: false,
  headers: () => [
    {
      source: '/path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
}
