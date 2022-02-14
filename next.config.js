/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    yourServiceID: process.env.SERVICE_ID,
    yourTemplateID: process.env.TEMPLATE_ID,
    userID: process.env.USER_ID,
    terraProjectRoute: process.env.TERRA_PROJECT_ROUTE,
  },
};

module.exports = nextConfig;
