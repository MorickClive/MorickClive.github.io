/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || ''; // set to '/your-repo-name' if not a user site
const nextConfig = {
  output: 'export',
  assetPrefix: basePath,
  basePath: basePath
}

module.exports = nextConfig