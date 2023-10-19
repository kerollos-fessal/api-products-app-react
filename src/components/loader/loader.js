import React from "react";
import ReactLoading from "react-loading";

const Loader = ({ type, color }) => (
  <ReactLoading
    type={type}
    color={color}
    height={"20%"}
    width={"20%"}
    className="m-auto mt-5"
  />
);

export default Loader;
