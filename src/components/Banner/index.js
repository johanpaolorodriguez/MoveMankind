export default function Banner(props) {
	const { functions, title } = props;
	return (
		<div className="bg-[#1b2733] rounded-md">
			<div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex flex-wrap items-center justify-center space-x-6 text-center text-white">
					{title && <span>{title}</span>}

					{functions?.map((fn) => (
						<button
							key={fn.function}
							onClick={() => fn.function(true)}
							className="flex justify-center px-4 py-2 text-base text-blue-500 bg-white border border-blue-500 rounded-md text-button font-primary"
						>
							{fn.content}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
