import react, { Fragment, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import {
  PlusIcon,
  CheckCircleIcon,
  XCircleIcon,
  MinusIcon,
} from "@heroicons/react/solid";

const Tags = ({ data, field, filterWithId, removeFilterWithId, name }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  //TODO: move logic to main component
  const handleAddTagOnClick = (uid, name) => {
    const newTag = {
      uid: uid,
      name: name,
    };
    setSelectedTags([...selectedTags, newTag]);
  };

  const handleRemoveTagOnClick = (uid) => {
    const filteredTags = selectedTags.filter((tag) => tag.uid !== uid);
    setSelectedTags(filteredTags);
  };

  const isInSelectedTags = (uid) => {
    return selectedTags.some((tag) => tag.uid === uid);
  };

  return (
    <section className="space-y-2 text-left">
      <h5 className="font-bold font-primary text-primary">{name}</h5>
      <div className="w-auto space-y-2 ">
        {selectedTags.map((tag) => (
          <button
            className="flex items-center w-auto px-4 py-1 space-x-1 font-bold text-white bg-blue-600 rounded-md font-primary group hover:bg-red-500"
            onClick={() => {
              handleRemoveTagOnClick(tag.uid);
              removeFilterWithId(field, tag.uid);
            }}
            key={tag.uid}
          >
            <XCircleIcon className="hidden w-4 h-4 ml-1 group-hover:block" />
            <CheckCircleIcon className="w-4 h-4 group-hover:hidden" />
            <span>{tag.name}</span>
          </button>
        ))}
      </div>
      <Disclosure as="div" className="flex flex-col space-y-1">
        {({ open, close }) => (
          <>
            <Disclosure.Button className="flex items-center justify-between w-64 px-4 py-1 font-bold text-blue-600 border-2 border-blue-600 border-dotted rounded-md group font-primary hover:bg-blue-100">
              <PlusIcon className={`${open ? "hidden" : "block"} w-4 h-4`} />
              <MinusIcon className={`${open ? "block" : "hidden"} w-4 h-4`} />
              <span>add</span>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel
                as="div"
                className="flex flex-col w-64 border-2 border-blue-600 border-dotted divide-y divide-blue-500 rounded-md divide-dotted"
              >
                {data.map((item) => (
                  <button
                    className="flex items-center p-2 space-x-2 text-sm font-semibold hover:bg-blue-100 text-primary font-primary disabled:opacity-50 disabled:pointer-events-none"
                    onClick={() => {
                      handleAddTagOnClick(item.uid, item.name);
                      // setSelectedTags([...selectedTags, item.name]);
                      filterWithId(field, item.uid);
                      close();
                    }}
                    disabled={isInSelectedTags(item.uid)}
                    key={item.uid}
                  >
                    <PlusIcon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </section>
  );
};

export default Tags;
