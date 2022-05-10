import { useState } from "react";

import { stringifyDate } from "./NoteDate";
import IconButton from "./IconButton"
import { FaPen } from "react-icons/fa"

function AddTask(props) {
  const { callback: onSubmit, onClose } = props;
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateDate = (e) => {
    setDate(new Date(e.target.value));
  };

  const submitForm = (e) => {
      e.preventDefault();
      onSubmit(title, date)
      onClose()

      setTitle("")
      setDate(new Date())

  }

  return (
    <div className="form">
      <h2 className="notes__title">Add Task</h2>
      <form onSubmit={ submitForm }>
        <div className="form__control">
          <label htmlFor="task-name" className="notes__content">
            Task Name
          </label>
          <input
            name="task-name"
            className="notes__content"
            type="text"
            value={title}
            onChange={updateTitle}
          />
        </div>
        <div className="form__control">
          <label htmlFor="task-date" className="notes__content">
            Task Date
          </label>
          <input
            name="task-date"
            className="notes__content"
            type="datetime-local"
            value={stringifyDate(date)}
            onChange={updateDate}
          />
        </div>
        <IconButton icon={ FaPen } content="Create" color="green"/>
      </form>
    </div>
  );
}

export default AddTask;
