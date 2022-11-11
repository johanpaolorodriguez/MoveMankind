import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React, { useEffect } from "react";

export default function SetInitialContentPlugin({ value }) {
	const [editor] = useLexicalComposerContext();

	useEffect(() => {
		if (value && editor) {
			const initialEditorState = editor.parseEditorState(value);
			editor.setEditorState(initialEditorState);
		}
	}, [value, editor]);

	return null;
}
