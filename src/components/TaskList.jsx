import Task from "./Task";
import "./TaskList.css";

function TaskList({
  tasks,
  markComplete,
  clearTasks,
  deleteTask,
  editTask,
  darkMode,
}) {
  const incompleteTaskCount = tasks.filter((task) => !task.complete).length;

  return (
    <div className={"task-list" + (darkMode ? " dark-mode" : "")}>
      <div className="top-section">
        <p className="left-tasks ">
          {incompleteTaskCount == 1
            ? "1 task left"
            : `${incompleteTaskCount} tasks left`}
        </p>
        <button className="clear-tasks" onClick={clearTasks}>
          Clear all tasks
        </button>
      </div>

      {tasks.length > 0 &&
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            markComplete={markComplete}
            deleteTask={deleteTask}
            editTask={editTask}
            darkMode={darkMode}
          />
        ))}

      {tasks.length === 0 && <p>You have no tasks</p>}
    </div>
  );
}

export default TaskList;
