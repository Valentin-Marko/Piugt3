import React from "react";

const SearchBox = (props) => {
  const { searchChange } = props;
  return (
    <div>
      <input
        className=""
        type="search"
        placeholder="Search"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
