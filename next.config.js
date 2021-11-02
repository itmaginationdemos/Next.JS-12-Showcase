/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // the experimental new Rust minifier
  swcMinify: true,
  experimental: {
    // dynamic url imports
    urlImports: ['https://cdn.skypack.dev']
  }
}
