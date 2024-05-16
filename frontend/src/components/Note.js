import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const ToDo = ({text, updateMode, deleteNote}) => {
  return (
    <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
            <BiEdit className="icon" onClick = {updateMode}></BiEdit>
            <AiFillDelete className="icon" onClick={deleteNote}></AiFillDelete>
        </div>
    </div>
  )
}

export default ToDo