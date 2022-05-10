import { useState } from "react";
import { getFromLocalStorage, storeToLocalStorage } from "../localStorageHelper"

function NoteTitle({ title, noteId }) {
  const [showEdit, setShowingEdit] = useState(false);
  const [inputTitleValue, setInputTitleValue] = useState(title);

  const saveEditedTitle = (e) => {
    if (e.code !== "Enter") return
    
    const taskList = getFromLocalStorage("tasks")
    taskList.forEach(
      task => {
        if (task.id === noteId) {
          task.name = inputTitleValue
        }
      }
    )

    storeToLocalStorage("tasks", taskList)


    setShowingEdit(false);
  }

  const changeValue = (e) => {
      setInputTitleValue(e.target.value)
  }

  return showEdit ? (
    <input type="text" value={inputTitleValue} onKeyDown={ saveEditedTitle } onChange={ changeValue }/>
  ) : (
    <h2 className="notes__title" onDoubleClick={() => setShowingEdit(true)}>{inputTitleValue}</h2>
  );
}

export default NoteTitle;
