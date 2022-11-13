import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const count = useSelector((state) => state);
  return <h1>{count}</h1>;
}

export default Home;
