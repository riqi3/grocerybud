import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ list, setList, setEditList }) => {
const handleRemove = ({id}) => {
    setList(list.filter((list)=>list.id !== id));
};
const handleEdit = ({id})=>{
    const findList = list.find((list)=> list.id ===id);
    setEditList(findList);
};


  return (
    <div className="list-container-list">
      {list.map((list) => (
        <li className="item-list" key={list.id}>
          <input
            type="text"
            value={list.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <div className="btn-container">
            <button id="edit-icon" className="btn-edit task-btn" onClick={()=> handleEdit(list)}>
            <FaEdit></FaEdit>
            </button>
            <button id="trash-icon" className="btn-remove task-btn" onClick={()=> handleRemove(list)}>
            <FaTrash></FaTrash>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default List;
