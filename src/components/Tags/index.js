import { useState, useEffect } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";

export default function FilterGroup({
  data,
  filterWithId,
  removeFilterWithId,
  paramFilter,
}) {
  const [tags] = useState(data);
  const [activeTab, setActiveTab] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  // useEffect(() => {
  //   if (paramFilter) {
  //     let categoryFilter = data.Categories.find(
  //       (category) => category.uid === paramFilter
  //     );
  //     filterWithId(categoryFilter.field, categoryFilter.uid);
  //     handleAddTagOnClick(
  //       categoryFilter.uid,
  //       categoryFilter.name,
  //       categoryFilter.field
  //     );
  //   }
  // }, [paramFilter]);

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
    <div className="flex-col w-full py-4 bg-gray-50 md:flex">
      <div className="flex w-full mx-auto max-w-[90rem] max-w">
        {/* Tag Navigation */}
        <div className="flex justify-start w-full p-5 space-x-6 md:space-x-12 lg:space-x-28 rounded-xl">
          {Object.keys(tags).map((tag, i) => (
            <button
              key={i}
              onClick={() =>
                activeTab !== i ? setActiveTab(i) : setActiveTab(null)
              }
              className={`${
                activeTab === i ? "text-blue-500" : "text-primary"
              } text-sm md:text-md font-bold lg:text-lg space-x-2 flex items-center py-4`}
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
                className="max-w-[90rem] grid-cols-5 px-5 py-8 mx-auto md:grid justify-items-start place-items-start auto-cols-max"
                key={i}
              >
                {items.map((item, i) => (
                  <button
                    onClick={() => {
                      filterWithId(item.field, item.uid);
                      handleAddTagOnClick(item.uid, item.name, item.field);
                    }}
                    className="w-full p-2 space-x-2 text-xs font-semibold text-left hover:text-blue-500 text-primary font-primary disabled:opacity-50 disabled:pointer-events-none"
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
      <div
        className={`${
          selectedTags !== null ? "flex" : "hidden"
        } w-full max-w-[90rem] mx-auto my-4 space-x-2 px-5`}
      >
        {selectedTags.map((tag) => (
          <button
            className="flex items-center w-auto px-4 py-1 space-x-1 text-xs font-bold text-white rounded-md bg-primary font-primary group hover:bg-red-500"
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
