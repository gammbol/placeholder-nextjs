/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'via.placeholder.com'],
    formats: ['image/webp'],
    allowFutureImage: true
  }
}

module.exports = nextConfig
