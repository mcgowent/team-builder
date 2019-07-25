import React, { useState, useEffect } from "react";

import './App.css';
import TeamList from "./TeamList"
import Form from "./form"

function App() {
  const [team, setTeam] = useState({});
  const [list, setList] = useState([{ username: "Tim", email: "tim@email.com", role: "Web Stuff" }, { username: "Bob", email: "bob@email.com", role: "UX" }, { username: "John", email: "John@email.com", role: "Data" }]);

  const [newValue, setNewValue] = useState({});
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    setTeam(newValue)
  }, [newValue]);


  function editMember(event) {
    const tempList = list.map(e => {
      if (e === newValue) {
        return event
      }
      return e
    })
    setList(tempList)
  }


  function handleChange(event) {
    const updatedTeam = { ...team, [event.target.name]: event.target.value }
    setTeam(updatedTeam)

  }

  function handleSubmit(event) {
    event.preventDefault()

    if (isEditing) {
      editMember({ ...team, [event.target.name]: event.target.value })
      setEditing(false)
    }
    else {
      const updatedList = [...list, team]
      setList(updatedList)
    }

  }


  function removeItem(name) {
    setList(list.filter((list) => list.username !== name))
  }

  return (
    <div className="App">
      <div>
        <Form handleChange={handleChange} handleSubmit={handleSubmit} team={team} />
      </div>
      <div>
        <TeamList list={list} setNewValue={setNewValue} setEditing={setEditing} removeItem={removeItem} />
      </div>
    </div>
  );
}

export default App;