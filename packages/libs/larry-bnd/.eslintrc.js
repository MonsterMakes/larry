module.exports = {
	"plugins": [
	],
	"parserOptions": {
		"sourceType": "module",
		"ecmaVersion": 2020
	},
	"env": {
		"es6": true,
		"node": true,
		"mocha": true
	},
	"extends": "eslint:recommended",
	"rules": {
		"no-console": ["error"],
		"no-prototype-builtins": "off",
		"no-unused-vars": ["error", { "args": "none" }],
		"indent": [
			"warn",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"warn",
			"single", 
			{ "allowTemplateLiterals": true }
		],
		"semi": [
			"error",
			"always"
		]
	}
};