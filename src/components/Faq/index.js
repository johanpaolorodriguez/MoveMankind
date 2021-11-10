import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function FrequentlyAskedQuestions() {
  return (
    <div className="w-full">
      <div className="w-full p-2 mx-auto space-y-2 bg-white rounded-2xl">
        <FaqPanel
          question={`What is the Composition of Your Team Management?`}
          answer={` Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        />
        <FaqPanel
          question={`How Big is Your Market Opportunity?`}
          answer={` Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        />
        <FaqPanel
          question={`How Will My Investment Capital Be Used and What Progress Will Be Made With That Capital?`}
          answer={` Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        />
        <FaqPanel
          question={`What do you see as the principal risks to the business? What steps do you anticipate taking to mitigate such risks?`}
          answer={` Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        />
        <FaqPanel
          question={`What are the key competitive advantages of your company’s technology?`}
          answer={` Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        />
        <FaqPanel
          question={`What key intellectual property does the company have (patents, patents pending, copyrights, trade secrets, trademarks, domain names)?`}
          answer={` Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        />
      </div>
    </div>
  );
}

const FaqPanel = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
            <span>{props.question}</span>
            <ChevronDownIcon
              className={`${
                open ? "transform rotate-180" : ""
              } w-5 h-5 text-gray-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
            {props.answer}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
