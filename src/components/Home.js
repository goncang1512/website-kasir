import React from "react";
import Navbar from "./Navigation";
import Dasbord from "./Dasbord";

export default function Home() {
  return (
    <div className="Home">
      <div className="navbarPage">
        <Navbar />
      </div>
      <div className="dasbordPage">
        <Dasbord />
      </div>
    </div>
  );
}
