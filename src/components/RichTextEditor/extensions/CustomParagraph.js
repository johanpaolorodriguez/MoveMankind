import Paragraph from "@tiptap/extension-paragraph";

const CustomParagraph = Paragraph.extend({
	draggable: true,
	addAttributes() {
		return {
			...this.parent?.(),
			class: {
				default: null,
			},
		};
	},
	addCommands() {
		return {
			...this.parent?.(),
			setFlexAlignmentClass:
				(alignment) =>
				({ commands }) => {
					return commands.updateAttributes("paragraph", {
						class: alignment,
					});
				},
		};
	},
});

export default CustomParagraph;
