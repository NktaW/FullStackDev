import React from "react";

const App = (props) => {
  const {notes} = props;

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
        //Key atribuutti, React päättelee miten sen tulee päivittää komponentin generoimaa näkymää. 
        <li key={note.id}>
          {note.content}
        </li>
        )}
      </ul>
    </div>
  )

}

export default App;