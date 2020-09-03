import React, { useEffect } from "react";
import InputListItem from "./InputListItem";

const InputList = ({ phonebooks, onRemove, onEdit }) => {
  return (
    <div className="inputList">
      {phonebooks.map((phonebook, index) => (
        <InputListItem
          phonebook={phonebook}
          key={index}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default InputList;
