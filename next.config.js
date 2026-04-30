        /** @type {import('next').NextConfig} */
        const nextConfig = {
          async rewrites() {
            return [
              {
                source: '/:path*',
                // Replace this with your actual ArvanCloud domain and HTTPS protocol
                destination: 'https://lordnecromancer.top/:path*', 
              },
            ]
          },
        }
        module.exports = nextConfig
