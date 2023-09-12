import { useState, useEffect } from "react";
import "../css/Note.css";
import CreateNote from "./CreateNote";
import Note from "./Note";
import axios from 'axios';

function Notes() {

  //states
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [id, setId] = useState(null)

  // get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  // add new note to the state array
  const saveHandler = () => {
    let method = 'post'
    let url = 'http://localhost:8000/api/notes/'
    if(id != null){
      method = 'put'
      url = `http://localhost:8000/api/notes/${id}/`
    }

    axios({method: method,
    url:  url,
    data:{
      notes: inputText,
      user: 1
    }})
      .then(response => {
        getNotes();
      })
      .catch(error => {
        console.error(error);
      });
    //clear the textarea
    setInputText("");
    setId(null);
  };

  //delete note function
  const deleteNote = (id) => {
    // const filteredNotes = notes.filter((note) => note.id !== id);
    // setNotes(filteredNotes);

    axios.delete(`http://localhost:8000/api/notes/${id}/`)
      .then(response => {
        getNotes();
      })
      .catch(error => {
        console.error(error);
      });

  };

  const editNote = (id, note) => {
    setInputText(note)
    setId(id)
  }


  const getNotes = () => {
    axios.get('http://localhost:8000/api/notes/')
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  //apply the save and get functions using useEffect
  //get the saved notes and add them to the array
  useEffect(() => {

    getNotes()
  }, []);


  //saving data to local storage
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.notes}
          deleteNote={deleteNote}
          editNote = {editNote}
        />
      ))}
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
}

export default Notes;
