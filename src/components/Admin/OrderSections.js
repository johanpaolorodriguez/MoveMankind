import { useRef, useState } from "react";
import Modal from "../Modal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const OrderSections = ({ isOpen, setIsOpen, pageIndex, saveIndex }) => {
	const cancelButtonRef = useRef(null);
	const [indexFromPageIndex, updateIndexfromPageIndex] = useState(pageIndex);

	function handleOnDragEnd(result) {
		if (!result.destination) return;
		const items = Array.from(indexFromPageIndex);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		updateIndexfromPageIndex(items);
	}

	const handleSave = () => {
		saveIndex(indexFromPageIndex);
	};

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
			<div className="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
				<div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
					<div className="sm:flex sm:items-start">
						<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
							<DragDropContext onDragEnd={handleOnDragEnd}>
								<Droppable droppableId="characters">
									{(provided) => (
										<ul
											{...provided.droppableProps}
											ref={provided.innerRef}
										>
											{indexFromPageIndex.map(
												(value, index) => {
													return (
														<Draggable
															key={
																value
															}
															draggableId={
																value
															}
															index={
																index
															}
														>
															{(
																provided
															) => (
																<li
																	ref={
																		provided.innerRef
																	}
																	{...provided.draggableProps}
																	{...provided.dragHandleProps}
																>
																	<p>
																		{
																			value
																		}
																	</p>
																</li>
															)}
														</Draggable>
													);
												}
											)}
											{provided.placeholder}
										</ul>
									)}
								</Droppable>
							</DragDropContext>
						</div>
					</div>
				</div>
				<div className="px-4 py-3 space-y-4 sm:px-6 sm:flex sm:flex-row-reverse md:space-y-0">
					<button
						type="button"
						className="inline-flex justify-center w-full px-4 py-2 text-base font-semibold border border-blue-400 rounded-md appearance-none hover:bg-blue-500 hover:text-white col-span-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
						onClick={() => {
							handleSave();
							setIsOpen(false);
						}}
					>
						Save
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default OrderSections;
