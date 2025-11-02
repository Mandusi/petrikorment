module.exports = {
	apps: [
		{
			name: 'petrikorment',
			script: 'pnpm serve .output/public -p 3131',
			env: { NODE_ENV: 'production' },
		},
	],
}
