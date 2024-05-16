const getAllNote = (setNote) => {
    fetch(`${process.env.REACT_APP_BASE_URL}`)
        .then((response) => response.json())
        .then((data) => {
            setNote(data);
        })
        .catch((err) => console.log(err));
};

const addNote = (text, setText, setNote, setCount) => {
   fetch(`${process.env.REACT_APP_BASE_URL}/save`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
   })
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         setText("");
         getAllNote(setNote);
         getCount(setCount);
      })
      .catch((err) => console.log(err));
};

const updateNote = (noteId, text, setNote, setText, setIsUpdating, setCount) => {
   fetch(`${process.env.REACT_APP_BASE_URL}/update`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ _id: noteId, text })
   })
      .then((response) => response.json())
      .then((data) => {
         setText("");
         setIsUpdating(false);
         getAllNote(setNote);
         getCount(setCount);
      })
      .catch((err) => console.log(err));
};

const deleteNote = (_id, setNote, setCount) => {
   fetch(`${process.env.REACT_APP_BASE_URL}/delete`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ _id })
   })
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         getAllNote(setNote);
         getCount(setCount);
      })
      .catch((err) => console.log(err));
};

const getCount = (setCount) => {
   fetch(`${process.env.REACT_APP_BASE_URL}/count`)
      .then((response) => response.json())
      .then((data) => {
         setCount(data.count.count);
         console.log("Count: ", data.count.count);
      })
      .catch((err) => console.log(err));
};

export { getAllNote, addNote, updateNote, deleteNote, getCount };
