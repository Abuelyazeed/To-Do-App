import { MdAdd } from "react-icons/md";
import "./AddTask.css";
import { useState } from "react";

function AddTask({ addTask, darkMode }) {
  const [taskInput, setTaskInput] = useState("");

  function changeHandler(event) {
    setTaskInput(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    addTask(taskInput);
    setTaskInput("");
  }

  return (
    <>
      <form className="row g-3" onSubmit={submitHandler}>
        <div
          className={
            "col-auto form" + (darkMode ? " dark-mode" + " hover-color" : "")
          }
        >
          <MdAdd className="logo" />
          <input
            type="text"
            className={
              "form-control-plaintext" + (darkMode ? " dark-mode-text" : "")
            }
            value={taskInput}
            onChange={changeHandler}
            placeholder="Add a task..."
          />
          <button type="submit" className="btn btn-primary mb-3">
            ADD
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTask;
