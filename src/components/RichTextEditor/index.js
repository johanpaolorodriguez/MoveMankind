import React, { useRef } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import Toolbar from "./toolbar";
import SetInitialContentPlugin from "./SetInitialContentPlugin";

export default function RichTextEditor({
	saveContent,
	title,
	initialEditorState,
}) {
	const editorStateRef = useRef();
	console.log("RTE", initialEditorState);

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
			<LexicalComposer
				initialConfig={{
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
				}}
			>
				<SetInitialContentPlugin value={initialEditorState} />
				<Toolbar handleSave={handleSave} />
				<RichTextPlugin
					contentEditable={
						<ContentEditable className="min-h-[450px] outline-none py-[15px] px-2.5 resize-none overflow-hidden text-ellipsis" />
					}
				/>
				<OnChangePlugin onChange={onChange} />
				<HistoryPlugin />
			</LexicalComposer>
		</div>
	);
}
