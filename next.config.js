/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "abrahamdn.com", "abrahamdn.github.io"],
  },
  env: {
    SERVICE_KEY: process.env.SERVICE_KEY,
    TEMPLATE_KEY: process.env.TEMPLATE_KEY,
    API_KEY: process.env.API_KEY,
  },
};
