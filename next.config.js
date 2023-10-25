/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer'

const nextConfig = {
  reactStrictMode: true,
  output: 'export'
};

export default withContentlayer(nextConfig)
