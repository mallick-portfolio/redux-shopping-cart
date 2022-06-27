import React, { useState } from "react";

const Header = () => {
  const [tags, setTags] = useState(null);
  const [filter, setFilter] = useState(null);
  return (
    <>
      <h3 className="text-3xl">Dashboard {">"} Supply Board</h3>
      <div className="flex">
        <div>
          <input
            className="outline-none border-2 border-[#444] rounded-md pl-2"
            type="text"
            placeholder="search items"
          />
        </div>
        <div className="">
          <select
            onChange={(e) => setTags(e.target.value)}
            name=""
            id=""
            className="ml-2 border-2 border-[#444] rounded-md outline-none"
          >
            <option value="tag1">tag1</option>
            <option value="tag2">tag2</option>
            <option value="tag3">tag3</option>
            <option value="tag4">tag4</option>
            <option value="tag5">tag5</option>
          </select>
        </div>
        <div className="">
          <select
            onChange={(e) => setFilter(e.target.value)}
            name=""
            id=""
            className="ml-2 border-2 border-[#444] rounded-md outline-none"
          >
            <option value="filter1">filter1</option>
            <option value="filter2">filter2</option>
            <option value="filter3">filter3</option>
            <option value="filter4">filter4</option>
            <option value="filter5">filter5</option>
          </select>
        </div>
        <div className="ml-2">
          {tags && (
            <span className="mr-3">
              {tags}{" "}
              <button onClick={() => setTags(null)} className="font-bold">
                X
              </button>
            </span>
          )}
          {filter && (
            <span>
              {filter}{" "}
              <button onClick={() => setFilter(null)} className="font-bold">
                X
              </button>
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
