import React, { useState } from "react";

import './App.css';
import TeamList from "./TeamList"
import Form from "./form"

function App() {
  const [team, setTeam] = useState({});
  const [list, setList] = useState([]);

  function handleChange(event) {
    const updatedTeam = { ...team, [event.target.name]: event.target.value }

    setTeam(updatedTeam)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const updatedList = [...list, team]
    setList(updatedList)

  }


  return (
    <div className="App">
      <div>
        <Form handleChange={handleChange} handleSubmit={handleSubmit} team={team} />
      </div>
      <div>
        <TeamList list={list} />
      </div>
    </div>
  );
}

export default App;