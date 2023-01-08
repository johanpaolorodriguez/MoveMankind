import React, { useCallback } from "react";
import clsx from "clsx";

const ToolTip = ({ text }) => (
	<span className="-left-1/2 -top-12 | whitespace-nowrap absolute z-10 px-3 py-2 text-xs w-auto font-medium text-white transition-opacity duration-500 bg-gray-900 rounded-lg shadow-sm tooltip">
		{text}
	</span>
);

export default function Toolbar({ editor, handleSave }) {
	const addImage = useCallback(() => {
		const url = window.prompt("URL");

		if (url) {
			editor.chain().focus().setImage({ src: url }).run();
		}
	}, [editor]);

	return (
		<div className="fixed z-20 shadow bottom-8 left-1/2 transform -translate-x-1/2 min-w-52 h-10 px-2 py-2 bg-[#1b2733]">
			{editor && (
				<div className="flex items-center w-full h-full mb-4 space-x-2">
					{/* H1-H6 */}
					<button
						onClick={() =>
							editor
								.chain()
								.focus()
								.toggleHeading({ level: 1 })
								.run()
						}
						className={clsx(
							"has-tooltip px-1 hover:bg-gray-700 transition-colors duration-100 ease-in relative",
							editor.isActive("heading", { level: 1 })
								? "bg-gray-700"
								: "bg-transparent"
						)}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0H24V24H0z" />
							<path d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z" />
						</svg>
					</button>

					<button
						onClick={() =>
							editor
								.chain()
								.focus()
								.toggleHeading({ level: 2 })
								.run()
						}
						className={clsx(
							"has-tooltip px-1 hover:bg-gray-700 transition-colors duration-100 ease-in relative",
							editor.isActive("heading", { level: 2 })
								? "bg-gray-700"
								: "bg-transparent"
						)}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0H24V24H0z" />
							<path d="M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 4c2.071 0 3.75 1.679 3.75 3.75 0 .857-.288 1.648-.772 2.28l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546c.268-.307.43-.709.43-1.148 0-.966-.784-1.75-1.75-1.75-.918 0-1.671.707-1.744 1.606l-.006.144h-2C14.75 9.679 16.429 8 18.5 8z" />
						</svg>
					</button>

					<button
						onClick={() =>
							editor
								.chain()
								.focus()
								.toggleHeading({ level: 3 })
								.run()
						}
						className={clsx(
							"has-tooltip px-1 hover:bg-gray-700 transition-colors duration-100 ease-in relative",
							editor.isActive("heading", { level: 3 })
								? "bg-gray-700"
								: "bg-transparent"
						)}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0H24V24H0z" />
							<path d="M22 8l-.002 2-2.505 2.883c1.59.435 2.757 1.89 2.757 3.617 0 2.071-1.679 3.75-3.75 3.75-1.826 0-3.347-1.305-3.682-3.033l1.964-.382c.156.806.866 1.415 1.718 1.415.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75c-.286 0-.556.069-.794.19l-1.307-1.547L19.35 10H15V8h7zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z" />
						</svg>
					</button>

					<button
						onClick={() =>
							editor
								.chain()
								.focus()
								.toggleHeading({ level: 4 })
								.run()
						}
						className={clsx(
							"has-tooltip px-1 hover:bg-gray-700 transition-colors duration-100 ease-in relative",
							editor.isActive("heading", { level: 4 })
								? "bg-gray-700"
								: "bg-transparent"
						)}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0H24V24H0z" />
							<path d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm9-12v8h1.5v2H22v2h-2v-2h-5.5v-1.34l5-8.66H22zm-2 3.133L17.19 16H20v-4.867z" />
						</svg>
					</button>

					<button
						onClick={() =>
							editor
								.chain()
								.focus()
								.toggleHeading({ level: 5 })
								.run()
						}
						className={clsx(
							"has-tooltip px-1 hover:bg-gray-700 transition-colors duration-100 ease-in relative",
							editor.isActive("heading", { level: 5 })
								? "bg-gray-700"
								: "bg-transparent"
						)}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0H24V24H0z" />
							<path d="M22 8v2h-4.323l-.464 2.636c.33-.089.678-.136 1.037-.136 2.21 0 4 1.79 4 4s-1.79 4-4 4c-1.827 0-3.367-1.224-3.846-2.897l1.923-.551c.24.836 1.01 1.448 1.923 1.448 1.105 0 2-.895 2-2s-.895-2-2-2c-.63 0-1.193.292-1.56.748l-1.81-.904L16 8h6zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z" />
						</svg>
					</button>

					<button
						onClick={() =>
							editor
								.chain()
								.focus()
								.toggleHeading({ level: 6 })
								.run()
						}
						className={clsx(
							"has-tooltip px-1 hover:bg-gray-700 transition-colors duration-100 ease-in relative",
							editor.isActive("heading", { level: 6 })
								? "bg-gray-700"
								: "bg-transparent"
						)}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0H24V24H0z" />
							<path d="M21.097 8l-2.598 4.5c2.21 0 4.001 1.79 4.001 4s-1.79 4-4 4-4-1.79-4-4c0-.736.199-1.426.546-2.019L18.788 8h2.309zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" />
						</svg>
					</button>

					<span className="w-[1.5px] bg-gray-500 block h-5"></span>

					{/* BOLD */}
					<button
						className={clsx(
							"has-tooltip px-1 hover:bg-gray-700 transition-colors duration-100 ease-in relative",
							editor.isActive("bold")
								? "bg-gray-700"
								: "bg-transparent"
						)}
						onClick={() =>
							editor.chain().focus().toggleBold().run()
						}
						disabled={
							!editor
								.can()
								.chain()
								.focus()
								.toggleBold()
								.run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<g>
								<path
									fill="none"
									d="M0 0h24v24H0z"
								></path>
								<path d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z"></path>
							</g>
						</svg>
						<ToolTip text={"bold"} />
					</button>

					{/* STRIKETHROUGH */}
					<button
						className={clsx(
							"relative has-tooltip px-1 hover:bg-gray-700 transition-colors duration-100 ease-in",
							editor.isActive("strike")
								? "bg-gray-700"
								: "bg-transparent"
						)}
						onClick={() =>
							editor.chain().focus().toggleStrike().run()
						}
						disabled={
							!editor
								.can()
								.chain()
								.focus()
								.toggleStrike()
								.run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<g>
								<path
									fill="none"
									d="M0 0h24v24H0z"
								></path>
								<path d="M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2h-3.846zm-4.078-3H7.629a4.086 4.086 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03-2.48 0-3.719.782-3.719 2.346 0 .42.218.786.654 1.099.436.313.974.562 1.613.75.62.18 1.297.414 2.03.699z"></path>
							</g>
						</svg>
						<ToolTip text={"strike"} />
					</button>

					{/* ITALIC */}
					<button
						className={clsx(
							"relative has-tooltip px-1 hover:bg-gray-700 transition-colors duration-100 ease-in",
							editor.isActive("italic")
								? "bg-gray-700"
								: "bg-transparent"
						)}
						onClick={() =>
							editor.chain().focus().toggleItalic().run()
						}
						disabled={
							!editor
								.can()
								.chain()
								.focus()
								.toggleItalic()
								.run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<g>
								<path
									fill="none"
									d="M0 0h24v24H0z"
								></path>
								<path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z"></path>
							</g>
						</svg>
						<ToolTip text={"italic"} />
					</button>

					{/* UNDERLINE */}
					<button
						className={clsx(
							"relative has-tooltip px-1 hover:bg-gray-700 transition-colors duration-100 ease-in",
							editor.isActive("underline")
								? "bg-gray-700"
								: "bg-transparent"
						)}
						onClick={() =>
							editor
								.chain()
								.focus()
								.toggleUnderline()
								.run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3h2zM4 20h16v2H4v-2z" />
						</svg>
						<ToolTip text={"underline"} />
					</button>

					{/* CLEARMARKS */}
					<button
						className="relative px-1 transition-colors duration-100 ease-in has-tooltip hover:bg-gray-700"
						onClick={() =>
							editor.chain().focus().unsetAllMarks().run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M12.651 14.065L11.605 20H9.574l1.35-7.661-7.41-7.41L4.93 3.515 20.485 19.07l-1.414 1.414-6.42-6.42zm-.878-6.535l.27-1.53h-1.8l-2-2H20v2h-5.927L13.5 9.257 11.773 7.53z" />
						</svg>
						<ToolTip text={"clear"} />
					</button>

					<span className="w-[1.5px] bg-gray-500 block h-5"></span>

					{/* PARAGRAPH */}
					<button
						className={clsx(
							"relative has-tooltip px-1 hover:bg-gray-700 transition-colors duration-100 ease-in",
							editor.isActive("bulletList")
								? "bg-gray-700"
								: "bg-transparent"
						)}
						onClick={() =>
							editor.chain().focus().setParagraph().run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<g>
								<path
									fill="none"
									d="M0 0h24v24H0z"
								></path>
								<path d="M12 6v15h-2v-5a6 6 0 1 1 0-12h10v2h-3v15h-2V6h-3zm-2 0a4 4 0 1 0 0 8V6z"></path>
							</g>
						</svg>

						<ToolTip text={"paragraph"} />
					</button>

					{/* BlOCKQOUTE */}
					<button
						className="relative px-1 transition-colors duration-100 ease-in has-tooltip hover:bg-gray-700"
						onClick={() =>
							editor
								.chain()
								.focus()
								.toggleBlockquote()
								.run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<g>
								<path
									fill="none"
									d="M0 0h24v24H0z"
								></path>
								<path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
							</g>
						</svg>

						<ToolTip text={"quote"} />
					</button>

					{/* BULLETLIST */}
					<button
						className={clsx(
							"relative has-tooltip px-1 hover:bg-gray-700 transition-colors duration-100 ease-in",
							editor.isActive("bulletList")
								? "bg-gray-700"
								: "bg-transparent"
						)}
						onClick={() =>
							editor
								.chain()
								.focus()
								.toggleBulletList()
								.run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<g>
								<path
									fill="none"
									d="M0 0h24v24H0z"
								></path>
								<path d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"></path>
							</g>
						</svg>

						<ToolTip text={"bullet"} />
					</button>

					{/* ORDEREDLIST */}
					<button
						className={clsx(
							"relative has-tooltip px-1 hover:bg-gray-700 transition-colors duration-100 ease-in",
							editor.isActive("orderedList")
								? "bg-gray-700"
								: "bg-transparent"
						)}
						onClick={() =>
							editor
								.chain()
								.focus()
								.toggleOrderedList()
								.run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<g>
								<path
									fill="none"
									d="M0 0h24v24H0z"
								></path>
								<path d="M8 4h13v2H8V4zM5 3v3h1v1H3V6h1V4H3V3h2zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1H3zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2v-.5zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"></path>
							</g>
						</svg>

						<ToolTip text={"ordered"} />
					</button>

					{/* TaskLIST */}
					<button
						className={clsx(
							"relative has-tooltip px-1 hover:bg-gray-700 transition-colors duration-100 ease-in",
							editor.isActive("taskList")
								? "bg-gray-700"
								: "bg-transparent"
						)}
						onClick={() =>
							editor.chain().focus().toggleTaskList().run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<g>
								<path
									fill="none"
									d="M0 0h24v24H0z"
								></path>
								<path d="M21 2.992v18.016a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2h16.014c.548 0 .993.444.993.992zM19 4H5v16h14V4zm-7.707 9.121l4.243-4.242 1.414 1.414-5.657 5.657-3.89-3.89 1.415-1.414 2.475 2.475z"></path>
							</g>
						</svg>

						<ToolTip text={"ordered"} />
					</button>

					<span className="w-[1.5px] bg-gray-500 block h-5"></span>

					{/* HARDBREAK */}
					<button
						className="relative px-1 transition-colors duration-100 ease-in has-tooltip hover:bg-gray-700"
						onClick={() =>
							editor.chain().focus().setHardBreak().run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<g>
								<path
									fill="none"
									d="M0 0h24v24H0z"
								></path>
								<path d="M15 18h1.5a2.5 2.5 0 1 0 0-5H3v-2h13.5a4.5 4.5 0 1 1 0 9H15v2l-4-3 4-3v2zM3 4h18v2H3V4zm6 14v2H3v-2h6z"></path>
							</g>
						</svg>

						<ToolTip text={"break"} />
					</button>

					{/* HORIZONTALRULE */}
					<button
						className="relative px-1 transition-colors duration-100 ease-in has-tooltip hover:bg-gray-700"
						onClick={() =>
							editor
								.chain()
								.focus()
								.setHorizontalRule()
								.run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<g>
								<path
									fill="none"
									d="M0 0h24v24H0z"
								></path>
								<path d="M2 11h2v2H2v-2zm4 0h12v2H6v-2zm14 0h2v2h-2v-2z"></path>
							</g>
						</svg>

						<ToolTip text={"ruler"} />
					</button>

					<span className="w-[1.5px] bg-gray-500 block h-5"></span>

					{/* TEXTLEFT */}
					<button
						className="relative px-1 transition-colors duration-100 ease-in has-tooltip hover:bg-gray-700"
						onClick={() =>
							editor
								.chain()
								.focus()
								.setTextAlign("left")
								.run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z" />
						</svg>

						<ToolTip text={"text left"} />
					</button>

					{/* TEXTCENTER */}
					<button
						className="relative px-1 transition-colors duration-100 ease-in has-tooltip hover:bg-gray-700"
						onClick={() =>
							editor
								.chain()
								.focus()
								.setTextAlign("center")
								.run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M3 4h18v2H3V4zm2 15h14v2H5v-2zm-2-5h18v2H3v-2zm2-5h14v2H5V9z" />
						</svg>

						<ToolTip text={"text center"} />
					</button>

					{/* TEXTRIGHT */}
					<button
						className="relative px-1 transition-colors duration-100 ease-in has-tooltip hover:bg-gray-700"
						onClick={() =>
							editor
								.chain()
								.focus()
								.setTextAlign("right")
								.run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M3 4h18v2H3V4zm4 15h14v2H7v-2zm-4-5h18v2H3v-2zm4-5h14v2H7V9z" />
						</svg>

						<ToolTip text={"text right"} />
					</button>

					{/* TEXTJUSTIFY */}
					<button
						className="relative px-1 transition-colors duration-100 ease-in has-tooltip hover:bg-gray-700"
						onClick={() =>
							editor
								.chain()
								.focus()
								.setTextAlign("justify")
								.run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M3 4h18v2H3V4zm0 15h18v2H3v-2zm0-5h18v2H3v-2zm0-5h18v2H3V9z" />
						</svg>

						<ToolTip text={"text justify"} />
					</button>

					{/* CONTENT LEFT */}
					<button
						className="relative px-1 transition-colors duration-100 ease-in has-tooltip hover:bg-gray-700"
						onClick={() =>
							editor
								.chain()
								.focus()
								.setFlexAlignmentClass(
									"flex justify-start space-y-2"
								)
								.run()
						}
					>
						<svg
							className="w-6 h-6 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-1 2H4v14h16V5zM8 7v10H6V7h2z" />
						</svg>

						<ToolTip text={"content left"} />
					</button>

					{/* CONTENT CENTER */}
					<button
						className="relative px-1 transition-colors duration-100 ease-in has-tooltip hover:bg-gray-700"
						onClick={() =>
							editor
								.chain()
								.focus()
								.setFlexAlignmentClass(
									"flex justify-center space-y-2"
								)
								.run()
						}
					>
						<svg
							className="w-6 h-6 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M22 3C22.2652 3 22.5196 3.10536 22.7071 3.29289C22.8946 3.48043 23 3.73478 23 4V20C23 20.2652 22.8946 20.5196 22.7071 20.7071C22.5196 20.8946 22.2652 21 22 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H22ZM21 5H5V19H21V5Z" />
							<rect x="12" y="7" width="2" height="10" />
							<defs>
								<clipPath id="clip0_603_2628">
									<rect width="24" height="24" />
								</clipPath>
							</defs>
						</svg>

						<ToolTip text={"content center"} />
					</button>

					{/* CONTENT RIGHT  */}
					<button
						className="relative px-1 transition-colors duration-100 ease-in has-tooltip hover:bg-gray-700"
						onClick={() =>
							editor
								.chain()
								.focus()
								.setFlexAlignmentClass(
									"flex justify-end space-y-2"
								)
								.run()
						}
					>
						<svg
							className="w-6 h-6 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm-1 2H4v14h16V5zm-2 2v10h-2V7h2z" />
						</svg>

						<ToolTip text={"content right"} />
					</button>

					<span className="w-[1.5px] bg-gray-500 block h-5"></span>

					{/* IMAGE */}
					<button
						className="relative px-1 transition-colors duration-100 ease-in has-tooltip hover:bg-gray-700"
						onClick={addImage}
					>
						<svg
							className="w-6 h-6 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993V13h-2V5H4v13.999L14 9l3 3v2.829l-3-3L6.827 19H14v2H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
						</svg>

						<ToolTip text={"add image"} />
					</button>

					<span className="w-[1.5px] bg-gray-500 block h-5"></span>

					{/* UNDO */}
					<button
						className="relative px-1 transition-colors duration-100 ease-in has-tooltip hover:bg-gray-700"
						onClick={() =>
							editor.chain().focus().undo().run()
						}
						disabled={
							!editor.can().chain().focus().undo().run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z" />
						</svg>

						<ToolTip text={"undo"} />
					</button>

					{/* REDO */}
					<button
						className="relative px-1 transition-colors duration-100 ease-in has-tooltip hover:bg-gray-700"
						onClick={() =>
							editor.chain().focus().redo().run()
						}
						disabled={
							!editor.can().chain().focus().redo().run()
						}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M18.172 7H11a6 6 0 1 0 0 12h9v2h-9a8 8 0 1 1 0-16h7.172l-2.536-2.536L17.05 1.05 22 6l-4.95 4.95-1.414-1.414L18.172 7z" />
						</svg>

						<ToolTip text={"redo"} />
					</button>

					{/* SAVE */}
					<button
						className="relative px-1 transition-colors duration-100 ease-in has-tooltip hover:bg-gray-700"
						onClick={handleSave}
					>
						<svg
							className="w-5 h-5 text-gray-200 icon"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M4 3h14l2.707 2.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 1v5h9V4H7zm-1 8v7h12v-7H6zm7-7h2v3h-2V5z" />
						</svg>

						<ToolTip text={"save"} />
					</button>
				</div>
			)}
		</div>
	);
}
