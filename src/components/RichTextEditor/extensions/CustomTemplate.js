import { StarterKitOptions } from "@tiptap/starter-kit";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";

const editor = new Editor({
	content: "<p>Example Text</p>",
	extensions: [
		StarterKit.configure({
			// Disable an included extension
			history: false,

			// Configure an included extension
			heading: {
				levels: [1, 2],
			},
		}),
	],
});
