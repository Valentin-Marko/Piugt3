import "./App.css";
import React, { useState } from "react";
import SearchBox from "./SearchBox";
import SeaArray from "./SeaArray";
import Plaja from "./SeaCard";

const Sea = () => {
  const [searchField, setsearchField] = useState("");
  const onSearchChange = (event) => {
    setsearchField(event.target.value);
  };

  const filteredSea = SeaArray.filter((mare) => {
    return mare.name.toLowerCase().includes(searchField.toLowerCase());
  });

  console.log(filteredSea);
  return (
    <div>
      <h1>Sea</h1>
      <SearchBox searchChange={onSearchChange} />
      <Plaja mare={filteredSea} />
    </div>
  );
};

export default Sea;
