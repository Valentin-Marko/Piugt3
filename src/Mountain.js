import "./App.css";
import React, { useState } from "react";
import Montan from "./MountainCard";
import SearchBox from "./SearchBox";
import MountainArray from "./MountainArray";

const Mountain = () => {
  const [searchField, setsearchField] = useState("");
  const onSearchChange = (event) => {
    setsearchField(event.target.value);
  };

  const filteredMountain = MountainArray.filter((munte) => {
    return munte.name.toLowerCase().includes(searchField.toLowerCase());
  });

  console.log(filteredMountain);
  return (
    <div>
      <h1>Mountain</h1>
      <SearchBox searchChange={onSearchChange} />
      <Montan munte={filteredMountain} />
    </div>
  );
};

export default Mountain;
