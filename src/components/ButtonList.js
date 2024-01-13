import React from "react";
import Button from "./Button";

// const list = ["All", "Live", "Gaming"];

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="Romantic" />
      <Button name="Valentines" />
      <Button name="gym " />
      <Button name="Motivation" />
      <Button name="RamMandir" />
    </div>
  );
};

export default ButtonList;