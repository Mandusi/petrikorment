module.exports = {
	apps: [
		{
			name: 'petrikorment',
			script: 'serve .output/public -p 3131',
			env: { NODE_ENV: 'production' },
		},
	],
}
