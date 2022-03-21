import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const SignInOrUpPrompt = ({ isOpen, setIsOpen }) => {
  const cancelButtonRef = useRef(null);
  const history = useHistory();

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
            <div className="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="hidden text-lg font-medium leading-6 text-gray-900"
                    >
                      Sign up
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-base">
                        Please create an account or sign in to register your
                        interest in this company.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 space-y-4 sm:px-6 sm:flex sm:flex-row-reverse md:space-y-0">
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-base font-semibold border border-blue-400 rounded-md appearance-none hover:bg-blue-500 hover:text-white col-span-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setIsOpen(false);
                    history.push(ROUTES.SIGN_IN);
                  }}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-lg font-semibold text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setIsOpen(false);
                    history.push(ROUTES.SIGN_UP);
                  }}
                  ref={cancelButtonRef}
                >
                  Create Account
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SignInOrUpPrompt;
