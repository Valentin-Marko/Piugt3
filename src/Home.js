import "./App.css";
import React from "react";

function Home() {
  return (
    <div>
      <h1>Sea and Mountain</h1>
      <div className="images">
        <img
          className="grow"
          src="https://i.pinimg.com/564x/8f/ca/fa/8fcafa56bcabf6069cc3b137a68e0795.jpg"
        />
        <img
          className="grow"
          src="https://i.pinimg.com/564x/8f/57/ac/8f57acc64d7d0070cce38a5c8798138a.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
