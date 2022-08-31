import React from "react";
import ListCard from "./ListCard";

const ListCollection = ({ lists, deleteFunc, updateFunc, navigateToListDetails }) => {
  const renderLists = (lists) => {
    return lists.map((list) => (
      <ListCard
        key={list.serialNumber}
        name={list.name}
        serialNumber={list.serialNumber}
        deleteFunc={deleteFunc}
        updateFunc={updateFunc}
        navigateToListDetails={navigateToListDetails}
      />
    ))
  };

  return <div style={{ blockSize: "500px", overflowY: "scroll" }}>{renderLists(lists)}</div>;
};

export default ListCollection;
