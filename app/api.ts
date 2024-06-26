export const API = {
	topPage: {
		find: process.env.NEXT_PUBLIC_DOMAIN2 + '/api/top-page/find',
		byAlias: process.env.NEXT_PUBLIC_DOMAIN2 + '/api/top-page/byAlias/',
	},
	product: {
		find: process.env.NEXT_PUBLIC_DOMAIN2 + '/api/product/find',
	},
	review: {
		createDemo: process.env.NEXT_PUBLIC_DOMAIN2 + '/api/review/create-demo',
	},
};
