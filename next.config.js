module.exports = {
	images: {
		// domains: ['www.bigbasket.com']
		remotePatterns: [
			{
			  protocol: 'https',
			  hostname: '**.bigbasket.com',
			  port: '',
			  pathname: '/media/uploads/**',
			},
		  ],
	}
};
