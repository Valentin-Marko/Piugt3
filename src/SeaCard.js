import React from "react";

const Plaja = ({ mare }) => {
  return (
    <div className="images">
      {mare.map((element) => {
        return (
          <div className="grow card" key={`${element.key}`}>
            <img className="imagini" src={`${element.src}`} alt="imagini" />
            <h1>{`${element.name}`} </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Plaja;
