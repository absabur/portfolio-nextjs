/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: 'https://absabur.vercel.app',
  //       permanent: true,
  //     },
  //   ]
  // },
};

export default nextConfig;
