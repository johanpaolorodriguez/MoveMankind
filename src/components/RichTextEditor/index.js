import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import React, { useEffect, useState } from "react";
import Toolbar from "./toolbar";
import CustomImage from "./extensions/CustomImage";
import CustomParagraph from "./extensions/CustomParagraph";

export default function RichTextEditor({
	saveContent,
	title,
	initialEditorState,
	isEditable = false,
}) {
	const editor = useEditor({
		isEditable,
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
		if (editor && initialEditorState === null) {
			editor.commands.setContent(
				"<p>Set Title Above and Enter Text Here...</p>"
			);
		}
	}, [editor, initialEditorState]);

	useEffect(() => {
		if (!editor) {
			return undefined;
		}

		if (isEditable) {
			editor.setEditable(isEditable);
		}
	}, [editor, isEditable]);

	const handleSave = () => {
		const json = editor.getJSON();
		saveContent({
			[title]: JSON.stringify(json),
		});
	};

	return (
		<div>
			{isEditable && (
				<Toolbar editor={editor} handleSave={handleSave} />
			)}
			<EditorContent editor={editor} />
		</div>
	);
}
