import { FaTrashAlt } from "react-icons/fa"

import NoteTitle from "./NoteTitle"
import NoteDate from "./NoteDate"
import IconButton from "./IconButton"

function StickyNotes({ content, onDelete, noteId }) {

  const { name, date } = content

  return (
    <div className="notes">
      <NoteTitle title={ name } noteId={ noteId } />
      <NoteDate date={ date } noteId={ noteId } />
      <IconButton icon={ FaTrashAlt } color="red" content="Delete" onClick = { onDelete }/>
    </div>
  )
}

export default StickyNotes