module.exports = {
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	root: true,
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		},
	},
	rules: {
		"no-mixed-spaces-and-tabs": 0, // disable rule
	},
	env: {
		browser: true,
		node: true,
	},
};
