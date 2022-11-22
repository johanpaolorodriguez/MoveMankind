import { Image } from "@tiptap/extension-image";

const CustomImage = Image.extend({
	addAttributes() {
		return {
			...this.parent?.(),
			class: {
				default: "center",
			},
		};
	},
	addCommands() {
		return {
			...this.parent?.(),
			setImageAlignmentClass:
				(alignment) =>
				({ commands }) => {
					return commands.updateAttributes("image", {
						class: alignment,
					});
				},
		};
	},
});

export default CustomImage;
