/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
  experimental: {
    workerThreads: false,
    cpus: 1
  }
}

module.exports = nextConfig

