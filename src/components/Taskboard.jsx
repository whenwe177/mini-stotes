import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import PropTypes from "prop-types"

import StickyNotes from "./StickyNotes"

function Taskboard({ title, tasks, onDelete, onAdd }) {
  return (
    <div className="taskboard__handle">
      <div className="taskboard">
        <div className="taskboard__plaque">
          { title }
          <FaPlus className="icons--button" onClick={ onAdd } />
        </div>
        <div className="taskboard__content">
          { tasks.map(task => <StickyNotes key={ task.id } content={ task } noteId={ task.id } onDelete={ () => onDelete(task.id) }/>)}
        </div>
      </div>
    </div>
  )
}

Taskboard.propTypes = {
  taskList : PropTypes.array
}

export default Taskboard