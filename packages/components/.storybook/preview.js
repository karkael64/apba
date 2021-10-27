import { colorScheme } from "./colorScheme";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(storyFn, context) => {
		colorScheme(context.globals.colorScheme);
		return storyFn();
	},
];

export const globalTypes = {
	colorScheme: {
		name: "colorScheme",
		description: "prefered color scheme",
		defaultValue: "light",
		toolbar: {
			icon: "chromatic",
			items: [
				{ value: "light", right: "☀️", title: "Light" },
				{ value: "dark", right: "🌘", title: "Dark" },
			],
		},
	},
};
