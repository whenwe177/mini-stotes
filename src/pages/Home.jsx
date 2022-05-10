import { useEffect, useState } from "react";
import { getFromLocalStorage, storeToLocalStorage } from "../localStorageHelper"

import "../styles/home.css";

import Taskboard from "../components/Taskboard";
import Overlay from "../components/Overlay";
import Modal from "../components/Modal";
import AddTask from "../components/AddTask";

const tasklst = [
  {
    id: 1,
    name: "Nguli DAA",
    date: new Date(2022, 5, 4, 0, 0),
  },
  {
    id: 2,
    name: "Nguli DAA",
    date: new Date(2022, 4, 4, 0, 0),
  },
];

function Home() {

  const [tasks, setTasks] = useState([]);
  const [modalShown, setModalShown] = useState(false);

  useEffect(
    () => {
      const storedTask = getFromLocalStorage("tasks") ?? []
      setTasks(storedTask)
    },
    []
  )

  function addNewTask(title, date) {
    const taskDate = new Date(date);
    const taskId = tasks?.[tasks.length - 1]?.id + 1 ?? 1;
    const newTask = {
      id: taskId,
      name: title,
      date: taskDate,
    };
    const updatedTaskList = [...tasks, newTask]
    storeToLocalStorage("tasks", updatedTaskList)
    setTasks(updatedTaskList);
  }

  const deleteTask = (id) => {
    const updatedTaskList = tasks.filter((task) => task.id !== id)
    storeToLocalStorage("tasks", updatedTaskList)
    setTasks(updatedTaskList);
  };

  const toggleModal = () => {
    setModalShown((prevShown) => !prevShown);
  };

  return (
    <div>
      <Overlay showClass={ modalShown ? "show" : "" } onClick={ toggleModal }/>
      <main className="main">
        <h2 className="headline">Hello there!</h2>
        <p className="subheading">Here's what you have in plan: </p>

        <Taskboard title="Tasks" tasks={tasks} onDelete={deleteTask} onAdd={ toggleModal } />
        <Modal
          element={AddTask}
          callback={addNewTask}
          showClass={modalShown ? "show" : ""}
          onClose={toggleModal}
        />
      </main>
    </div>
  );
}

export default Home;
