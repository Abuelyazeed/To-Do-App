import AddTask from "./components/AddTask";
import MainHeader from "./components/MainHeader";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import { db } from "./config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const tasksCollectionRef = collection(db, "Tasks");

  // Fetch tasks from Firestore
  async function fetchTasks() {
    try {
      const data = await getDocs(tasksCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);
      setTasks(filteredData);
    } catch (err) {
      console.error(err);
    }
  }

  // Load tasks on initial render
  useEffect(() => {
    fetchTasks();
  }, []);

  // Toggle dark mode and update background
  useEffect(() => {
    document.body.style.background = darkMode
      ? "linear-gradient(to top, black 0%, black 65%, rgb(102, 43, 218) 65%, rgb(102, 43, 218) 100%)"
      : "linear-gradient(to top, white 0%, white 65%, rgb(102, 43, 218) 65%, rgb(102, 43, 218) 100%)";
  }, [darkMode]);

  function darkModeHandler() {
    setDarkMode(!darkMode);
  }

  // Add a new task
  async function addTask(taskData) {
    try {
      await addDoc(tasksCollectionRef, {
        task: taskData,
        complete: false,
      });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  }

  // Toggle task completion
  async function markCompleteHandler(task) {
    try {
      const taskDoc = doc(db, "Tasks", task.id);
      await updateDoc(taskDoc, { complete: !task.complete });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  }

  // Clear all tasks
  async function clearTasksHandler() {
    for (const task of tasks) {
      try {
        const taskDoc = doc(db, "Tasks", task.id);
        await deleteDoc(taskDoc);
      } catch (err) {
        console.error(err);
      }
    }
    fetchTasks();
  }

  // Delete a specific task
  async function deleteTaskHandler(id) {
    try {
      const taskDoc = doc(db, "Tasks", id);
      await deleteDoc(taskDoc);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  }

  // Edit a task
  async function editTask(id, editedTask) {
    try {
      const taskDoc = doc(db, "Tasks", id);
      await updateDoc(taskDoc, { task: editedTask });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <MainHeader darkMode={darkModeHandler} />
      <AddTask addTask={addTask} darkMode={darkMode} />
      <TaskList
        tasks={tasks}
        markComplete={markCompleteHandler}
        clearTasks={clearTasksHandler}
        deleteTask={deleteTaskHandler}
        editTask={editTask}
        darkMode={darkMode}
      />
    </>
  );
}

export default App;
