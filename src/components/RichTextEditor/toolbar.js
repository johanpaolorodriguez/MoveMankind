import React, { useEffect, useState, useCallback } from "react";
import clsx from "clsx";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	$getSelection,
	$isRangeSelection,
	FORMAT_TEXT_COMMAND,
	FORMAT_ELEMENT_COMMAND,
	UNDO_COMMAND,
	REDO_COMMAND,
} from "lexical";
import { INSERT_IMAGE_COMMAND } from "./plugins/ImagePlugin";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faBold,
	faStrikethrough,
	faItalic,
	faUnderline,
	faAlignLeft,
	faAlignCenter,
	faAlignRight,
	faAlignJustify,
	faRotateLeft,
	faRotateRight,
	faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
library.add(
	faBold,
	faStrikethrough,
	faItalic,
	faUnderline,
	faAlignLeft,
	faAlignRight,
	faAlignCenter,
	faAlignJustify,
	faRotateLeft,
	faRotateRight,
	faFloppyDisk
);

export function FillURL() {
	const srcfile = prompt("Enter the URL of the image:", "");

	return srcfile ?? "";
}

export default function Toolbar({ handleSave }) {
	const [editor] = useLexicalComposerContext();
	const [isBold, setIsBold] = useState(false);
	const [isItalic, setIsItalic] = useState(false);
	const [isStrikethrough, setIsStrikethrough] = useState(false);
	const [isUnderline, setIsUnderline] = useState(false);

	const updateToolbar = useCallback(() => {
		const selection = $getSelection();

		if ($isRangeSelection(selection)) {
			setIsBold(selection.hasFormat("bold"));
			setIsItalic(selection.hasFormat("italic"));
			setIsStrikethrough(selection.hasFormat("strikethrough"));
			setIsUnderline(selection.hasFormat("underline"));
		}
	}, []);

	useEffect(() => {
		return mergeRegister(
			editor.registerUpdateListener(({ editorState }) => {
				editorState.read(() => {
					updateToolbar();
				});
			})
		);
	}, [updateToolbar, editor]);

	const onClickUploadImageURL = (payload) => {
		editor.dispatchCommand(INSERT_IMAGE_COMMAND, payload);
	};

	return (
		<div className="fixed z-20 shadow bottom-8 left-1/2 transform -translate-x-1/2 min-w-52 h-10 px-2 py-2 bg-[#1b2733] mb-4 space-x-2 flex items-center">
			<button
				className={clsx(
					"px-1 hover:bg-gray-700 transition-colors duration-100 ease-in",
					isBold ? "bg-gray-700" : "bg-transparent"
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
				}}
			>
				<FontAwesomeIcon
					icon="fa-solid fa-bold"
					className="text-white w-3.5 h-3.5"
				/>
			</button>
			<button
				className={clsx(
					"px-1 hover:bg-gray-700 transition-colors duration-100 ease-in",
					isStrikethrough ? "bg-gray-700" : "bg-transparent"
				)}
				onClick={() => {
					editor.dispatchCommand(
						FORMAT_TEXT_COMMAND,
						"strikethrough"
					);
				}}
			>
				<FontAwesomeIcon
					icon="fa-solid fa-strikethrough"
					className="text-white w-3.5 h-3.5"
				/>
			</button>
			<button
				className={clsx(
					"px-1 hover:bg-gray-700 transition-colors duration-100 ease-in",
					isItalic ? "bg-gray-700" : "bg-transparent"
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
				}}
			>
				<FontAwesomeIcon
					icon="fa-solid fa-italic"
					className="text-white w-3.5 h-3.5"
				/>
			</button>
			<button
				className={clsx(
					"px-1 hover:bg-gray-700 transition-colors duration-100 ease-in",
					isUnderline ? "bg-gray-700" : "bg-transparent"
				)}
				onClick={() => {
					editor.dispatchCommand(
						FORMAT_TEXT_COMMAND,
						"underline"
					);
				}}
			>
				<FontAwesomeIcon
					icon="fa-solid fa-underline"
					className="text-white w-3.5 h-3.5"
				/>
			</button>

			<span className="w-[1px] bg-gray-600 block h-full"></span>

			<button
				className={clsx(
					"px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in"
				)}
				onClick={() => {
					editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
				}}
			>
				<FontAwesomeIcon
					icon="fa-solid fa-align-left"
					className="text-white w-3.5 h-3.5"
				/>
			</button>
			<button
				className={clsx(
					"px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in"
				)}
				onClick={() => {
					editor.dispatchCommand(
						FORMAT_ELEMENT_COMMAND,
						"center"
					);
				}}
			>
				<FontAwesomeIcon
					icon="fa-solid fa-align-center"
					className="text-white w-3.5 h-3.5"
				/>
			</button>
			<button
				className={clsx(
					"px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in"
				)}
				onClick={() => {
					editor.dispatchCommand(
						FORMAT_ELEMENT_COMMAND,
						"right"
					);
				}}
			>
				<FontAwesomeIcon
					icon="fa-solid fa-align-right"
					className="text-white w-3.5 h-3.5"
				/>
			</button>
			<button
				className={clsx(
					"px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in"
				)}
				onClick={() => {
					editor.dispatchCommand(
						FORMAT_ELEMENT_COMMAND,
						"justify"
					);
				}}
			>
				<FontAwesomeIcon
					icon="fa-solid fa-align-justify"
					className="text-white w-3.5 h-3.5"
				/>
			</button>

			<span className="w-[1px] bg-gray-600 block h-full"></span>

			<button
				className={clsx(
					"px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in"
				)}
				onClick={() => {
					editor.dispatchCommand(UNDO_COMMAND);
				}}
			>
				<FontAwesomeIcon
					icon="fa-solid fa-rotate-left"
					className="text-white w-3.5 h-3.5"
				/>
			</button>
			<button
				className={clsx(
					"px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in"
				)}
				onClick={() => {
					editor.dispatchCommand(REDO_COMMAND);
				}}
			>
				<FontAwesomeIcon
					icon="fa-solid fa-rotate-right"
					className="text-white w-3.5 h-3.5"
				/>
			</button>

			<button
				className={clsx(
					"px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in"
				)}
				onClick={() =>
					onClickUploadImageURL({
						altText: "URL image",
						src: FillURL(),
					})
				}
			>
				<FontAwesomeIcon
					icon="fa-solid fa-rotate-right"
					className="text-white w-3.5 h-3.5"
				/>
			</button>
			<span className="w-[1px] bg-gray-600 block h-full"></span>
			<button
				className={clsx(
					"px-1 bg-transparent hover:bg-gray-700 transition-colors duration-100 ease-in"
				)}
				onClick={handleSave}
			>
				<FontAwesomeIcon
					icon="fa-solid fa-floppy-disk"
					className="text-white w-3.5 h-3.5"
				/>
			</button>
		</div>
	);
}