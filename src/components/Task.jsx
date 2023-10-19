import { useState } from "react";
import "./Task.css";
import {
  MdOutlineDelete,
  MdOutlineModeEditOutline,
  MdOutlineCheck,
} from "react-icons/md";

function Task({ task, markComplete, deleteTask, darkMode, editTask }) {
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);

  function toggleHandler() {
    markComplete(task);
  }

  return (
    <>
      <li
        className={
          (task.complete ? "complete" : "") + (darkMode ? " dark-mode" : "")
        }
      >
        <div>
          <input
            type="checkbox"
            onClick={toggleHandler}
            id={task.id}
            defaultChecked={task.complete}
          />{" "}
          {editMode ? (
            <input
              type="text"
              placeholder="edit me"
              value={editedTask}
              onChange={(e) => {
                setEditedTask(e.target.value);
              }}
              className="edit-task"
            />
          ) : (
            editedTask
          )}
        </div>
        <div className="task-icons">
          {editMode ? (
            <MdOutlineCheck
              onClick={() => {
                editTask(task.id, editedTask);
                setEditMode(false);
              }}
            />
          ) : (
            <>
              <MdOutlineModeEditOutline
                onClick={() => {
                  setEditMode(true);
                }}
              />
              <MdOutlineDelete onClick={() => deleteTask(task.id)} />
            </>
          )}
        </div>
      </li>
    </>
  );
}

export default Task;
