import { FaRegCalendarAlt, FaRegCheckCircle } from "react-icons/fa";
import { getFromLocalStorage, storeToLocalStorage } from "../localStorageHelper";
import { useState } from "react";

const padDate = (date) => `${date}`.padStart(2, "0");
const stringifyDate = (date) =>
  `${date.getFullYear()}-${padDate(date.getMonth() + 1)}-${padDate(
    date.getDate()
  )}T${padDate(date.getHours())}:${padDate(date.getMinutes())}`;

function NoteDate(props) {
  const { date, noteId } = props;

  const [showDateEdit, setShowDateEdit] = useState(false);
  const [shownDate, setShownDate] = useState(date);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const doneEditingDate = (e) => {

    const taskList = getFromLocalStorage("tasks")
    taskList.forEach(
      task => {
        if (task.id === noteId) {
          task.date = e.target.value
        }
      }
    )

    storeToLocalStorage("tasks", taskList)

    setShownDate(new Date(e.target.value));
  };

  return (
    <div className="notes__date">
      {showDateEdit ? (
        <>
          <input
            type="datetime-local"
            value={stringifyDate(shownDate)}
            onChange={doneEditingDate}
          />
          <button
            type="button"
            class="button button--green"
            onClick={() => setShowDateEdit(false)}
          >
            <FaRegCheckCircle />
          </button>
        </>
      ) : (
        <>
          <p className="notes__content">
            {shownDate.toLocaleDateString("en-UK", options)}
          </p>
          <FaRegCalendarAlt
            className="icons icons--button"
            onClick={() => setShowDateEdit(true)}
          />
        </>
      )}
    </div>
  );
}

export default NoteDate;
export { stringifyDate }
