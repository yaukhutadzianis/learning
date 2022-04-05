import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "orange" : "white"} onClick={onSelect} />
);

export default Star;
