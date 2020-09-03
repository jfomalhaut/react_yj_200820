import React from "react";

const InputListItem = ({ phonebook, onRemove, onEdit }) => {
  const { id, name, age, tel } = phonebook;

  return (
    <div className="list-detail">
      <br />
      {name}
      {age}
      {tel}
      <button className="chk-box" onClick={() => onEdit(id)}>
        수정
      </button>
      <button className="delete" onClick={() => onRemove(id)}>
        삭제
      </button>
    </div>
  );
};

export default InputListItem;
