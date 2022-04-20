/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  env: {
    apiBaseUrl: 'https://wdox-backend.herokuapp.com',
  },
}

module.exports = nextConfig
