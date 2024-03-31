/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "*.googleusercontent.com",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "firebasestorage.googleapis.com",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "alumnisite.s3.amazonaws.com",
          port: "",
          pathname: "**",
        },
      ],
    },

};

export default nextConfig;
