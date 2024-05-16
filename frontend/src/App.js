import { useEffect, useState } from "react";
import Note from "./components/Note";
import { addNote, getAllNote, updateNote, deleteNote, getCount} from "./utlis/HandleApi";

function App() {
  const [note, setNote] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [noteId, setNoteId] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    getAllNote(setNote);
    getCount(setCount);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setNoteId(_id);
    getCount(setCount);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="Note App">Add a note</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add notes..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateNote(noteId, text, setNote, setText, setIsUpdating, setCount)
                : () => addNote(text, setText, setNote, setCount)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        <div>
          {isUpdating && (
            <div className="cancel" onClick={() => setIsUpdating(false)}>
              Cancel
            </div>
          )}
        </div>

        <div className="count-para">Total Numbers of Api calls on Add text and Update text and delete text Api: {count}</div>

        <div className="list">
          {note.map((item) => (
            <Note
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteNote={() => deleteNote(item._id, setNote, setCount)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
