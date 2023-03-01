import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import React, { useEffect, useState } from "react";
import Toolbar from "./toolbar";
import CustomImage from "./extensions/CustomImage";
import CustomParagraph from "./extensions/CustomParagraph";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Link from "@tiptap/extension-link";

export default function RichTextEditor({
	saveContent,
	deletePost,
	title,
	initialEditorState,
	isEditable = false,
}) {
	const [chosenContributions, setChosenContributions] = useState([]);

	const appendChosenContributions = (node, checked) => {
		let text = node.textContent;
		if (checked) {
			setChosenContributions((prev) => [...prev, text]);
		} else {
			setChosenContributions((prev) =>
				prev.filter((item) => item !== text)
			);
		}
	};

	const editor = useEditor({
		editable: isEditable,
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
			TaskList.configure({
				HTMLAttributes: {
					class: "list-none",
				},
			}),

			TaskItem.configure({
				HTMLAttributes: {
					class: "flex not-prose space-x-4",
				},
				nested: true,
				onReadOnlyChecked: (node, checked) => {
					appendChosenContributions(node, checked);
					//condition for title being contribute
					return true;
				},
			}),
			Link,
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

	const handleDelete = () => {
		deletePost(title);
	};

	return (
		<div>
			{isEditable && (
				<Toolbar
					editor={editor}
					handleSave={handleSave}
					handleDelete={handleDelete}
				/>
			)}
			<EditorContent editor={editor} />
		</div>
	);
}
