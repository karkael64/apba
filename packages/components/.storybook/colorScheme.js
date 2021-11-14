import { dark, light } from "../common/colors";

export const objectReduce = (obj, reducer, init) =>
	Object.keys(obj).reduce((acc, key) => reducer(acc, obj[key], key, obj), init);

const colorsToCssVar = (obj) => objectReduce(obj, (acc, item, key) => `${acc}\n--${key}: ${item};`, "");

export const colorScheme = (mode) => {
	const node = document.createElement("style");
	window.document.head.appendChild(node);
	node.textContent =
		mode === "dark"
			? `
  :root { ${colorsToCssVar(dark)} }
  body { background: var(--negative); color: var(--positive); }`
			: `
  :root { ${colorsToCssVar(light)} }
  body { background: var(--negative); color: var(--positive); }`;
};
