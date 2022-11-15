import React, { useRef } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import LexicalErrorBoundary from "./LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import SetInitialContentPlugin from "./plugins/SetInitialContentPlugin";
import { ImageNode } from "./nodes/ImageNode";
import Toolbar from "./toolbar";
import ImagePlugin from "./plugins/ImagePlugin";

export default function RichTextEditor({
	saveContent,
	title,
	initialEditorState,
}) {
	const editorStateRef = useRef();
	const editorConfig = {
		theme: {
			paragraph: "mb-1",
			rtl: "text-right",
			ltr: "text-left",
			text: {
				bold: "font-bold",
				italic: "italic",
				underline: "underline",
				strikethrough: "line-through",
			},
		},
		onError(error) {
			throw error;
		},
		nodes: [ImageNode],
	};

	function onChange(editorState) {
		editorStateRef.current = editorState;
	}

	const handleSave = () => {
		if (editorStateRef.current) {
			saveContent({
				[title]: JSON.stringify(editorStateRef.current),
			});
		}
	};

	return (
		<div className="relative bg-white border border-gray-200 rounded-sm shadow-sm">
			<LexicalComposer initialConfig={editorConfig}>
				<SetInitialContentPlugin value={initialEditorState} />
				<Toolbar handleSave={handleSave} />
				<ImagePlugin captionsEnabled={false} />
				<RichTextPlugin
					contentEditable={
						<ContentEditable className="min-h-[450px] outline-none py-[15px] px-2.5 resize-none overflow-hidden text-ellipsis" />
					}
					ErrorBoundary={LexicalErrorBoundary}
				/>
				<OnChangePlugin onChange={onChange} />
				<HistoryPlugin />
			</LexicalComposer>
		</div>
	);
}
