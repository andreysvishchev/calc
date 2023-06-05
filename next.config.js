/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	async headers() {
		const headers = []

		if (
			process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' ||
			process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
		) {
			headers.push({
				headers: [
					{
						key: 'X-Robots-Tag',
						value: 'noindex',
					},
				],
				source: '/:path*',
			})
		}

		return headers
	},
}

module.exports = nextConfig
