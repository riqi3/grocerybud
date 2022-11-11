import React from "react";

const List = ({ list, setList, setEditList, setAlert }) => {
  const handleRemove = ({ id }) => {
    setList(list.filter((list) => list.id !== id));
    showAlert(true, "danger", "An item was cleared");
  };

  const handleEdit = ({ id }) => {
    const findList = list.find((list) => list.id === id);
    setEditList(findList);
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <div className="list-container-list">
      {list.map((list) => (
        <li className="item-list" key={list.id}>
          <div className="list-wrapper">
            <table>
              <tr>
                <td>
                  <input
                    type="text"
                    value={list.title}
                    className="list"
                    onChange={(event) => event.preventDefault()}
                  />
                </td>
                <td>
                  {" "}
                  <button
                    id="edit-icon"
                    className="btn-edit task-btn"
                    onClick={() => handleEdit(list)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    id="trash-icon"
                    className="btn-remove task-btn"
                    onClick={() => handleRemove(list)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </table>

            {/* <div className="btn-container"></div> */}
          </div>
        </li>
      ))}
    </div>
  );
};

export default List;
