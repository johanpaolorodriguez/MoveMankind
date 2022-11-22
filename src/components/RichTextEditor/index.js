import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import React, { useEffect } from "react";
import Toolbar from "./toolbar";
import CustomImage from "./extensions/CustomImage";
import CustomParagraph from "./extensions/CustomParagraph";

export default function RichTextEditor({
	saveContent,
	title,
	initialEditorState,
}) {
	const editor = useEditor({
		editorProps: {
			attributes: {
				class: "prose prose-slate m-5 focus:outline-none max-w-none",
			},
		},
		extensions: [
			StarterKit.configure({
				paragraph: false,
			}),
			Underline,
			CustomImage.configure({
				inline: true,
			}),
			CustomParagraph,

			TextAlign.configure({
				types: ["heading", "paragraph"],
			}),
		],
		content: ``,
	});

	useEffect(() => {
		if (editor && initialEditorState) {
			const json = JSON.parse(initialEditorState);
			editor.commands.setContent(json);
		}
	}, [editor, initialEditorState]);

	const handleSave = () => {
		const json = editor.getJSON();
		saveContent({
			[title]: JSON.stringify(json),
		});
	};

	return (
		<div>
			<Toolbar editor={editor} handleSave={handleSave} />
			<EditorContent editor={editor} />
		</div>
	);
}
