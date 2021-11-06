import React from "react";

export function Item({ hit, components }) {
  return (
    <a href={`/${hit.path}`} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="flex flex-col truncate">
          <div className="text-lg font-semibold text-primary">
            <components.Highlight hit={hit} attribute="name" />
          </div>
          <div className="aa-ItemContentDescription">
            <components.Snippet hit={hit} attribute="description" />
          </div>
        </div>
      </div>
    </a>
  );
}
