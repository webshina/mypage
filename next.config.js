/** @type {import('next').NextConfig} */
const { withAxiom } = require('next-axiom');

module.exports = withAxiom({
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'favo-test-s3.s3.ap-northeast-1.amazonaws.com',
      'dxx0c0mtug6c6.cloudfront.net',
    ],
  },
});
