import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Modal = ({ isOpen, setIsOpen, children }) => {
	const cancelButtonRef = useRef(null);

	return (
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 z-10 overflow-y-auto"
				initialFocus={cancelButtonRef}
				onClose={setIsOpen}
			>
				<div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className="hidden sm:inline-block sm:align-middle sm:h-screen"
						aria-hidden="true"
					>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						{children}
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default Modal;
