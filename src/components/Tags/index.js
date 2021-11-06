import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";

export default function FilterGroup({
  data,
  filterWithId,
  removeFilterWithId,
}) {
  const [tags] = useState(data);
  const [activeTab, setActiveTab] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  //TODO: move logic to main component
  const handleAddTagOnClick = (uid, name, field) => {
    const newTag = {
      uid: uid,
      name: name,
      field: field,
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
    <div className="flex flex-col w-full py-4">
      <div className="flex w-full max-w-6xl mx-auto">
        <p className="w-64 p-4 text-base text-center text-gray-500 bg-white rounded-md">
          start exploring ventures by adding a tag!
        </p>
        {/* Tag Navigation */}
        <div className="flex justify-end w-full p-1 space-x-28 rounded-xl">
          {Object.keys(tags).map((tag, i) => (
            <button
              key={i}
              onClick={() =>
                activeTab !== i ? setActiveTab(i) : setActiveTab(null)
              }
              className={`${
                activeTab === i
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-primary"
              } font-bold text-lg space-x-2 flex items-center py-4`}
            >
              <span>{tag}</span>
              <ChevronDownIcon
                className={`${activeTab === i ? "hidden" : "block"} w-4 h-4`}
              />
              <ChevronUpIcon
                className={`${activeTab === i ? "block" : "hidden"} w-4 h-4`}
              />
            </button>
          ))}
        </div>
      </div>
      {/* Tag Display Body */}
      <div
        className={`${
          activeTab !== null ? "border-t border-b border-gray-100" : ""
        } mt-4 bg-white `}
      >
        {Object.values(tags).map((items, i) => {
          if (activeTab === i) {
            return (
              <div
                className="grid max-w-6xl grid-cols-5 py-8 mx-auto place-items-start auto-cols-max "
                key={i}
              >
                {items.map((item, i) => (
                  <button
                    onClick={() => {
                      filterWithId(item.field, item.uid);
                      handleAddTagOnClick(item.uid, item.name, item.field);
                    }}
                    className="flex items-center p-2 space-x-2 text-sm font-semibold hover:text-blue-500 text-primary font-primary disabled:opacity-50 disabled:pointer-events-none"
                    key={i}
                    disabled={isInSelectedTags(item.uid)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      {/* Selected Tags */}
      <div className="flex w-full max-w-6xl mx-auto my-4 space-x-2">
        {selectedTags.map((tag) => (
          <button
            className="flex items-center w-auto px-4 py-1 space-x-1 font-bold text-white rounded-md bg-primary font-primary group hover:bg-red-500"
            onClick={() => {
              handleRemoveTagOnClick(tag.uid);
              removeFilterWithId(tag.field, tag.uid);
            }}
            key={tag.uid}
          >
            <XCircleIcon className="hidden w-4 h-4 ml-1 group-hover:block" />
            <CheckCircleIcon className="w-4 h-4 group-hover:hidden" />
            <span>{tag.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
