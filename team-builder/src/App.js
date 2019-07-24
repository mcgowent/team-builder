import React, { useState } from "react";

import './App.css';
import TeamList from "./TeamList"

function App() {
  const [team, setTeam] = useState({});
  const [list, setList] = useState([]);



  function handleChange(event) {
    const updatedTeam = { ...team, [event.target.name]: event.target.value }

    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
      updatedTeam
    );
    setTeam(updatedTeam)

  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log("TeamList", team);


    const updatedList = [...list, team]
    setList(updatedList)
    console.log('This should be an updated List', list)
  }

  return (
    <div className="App">
      <div className="App">
        <form onSubmit={event => handleSubmit(event)}>
          <label>
            Add New Team Members:<br />
            <label>Name:</label>
            <input
              type="text"
              id="name"
              name="username"
              placeholder="Team Member"
              value={team.username}
              onChange={handleChange}
            />
            <br /><label>Email:</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={team.email}
              onChange={handleChange}
            />
            <br /><label>Team Role:</label>

            <input
              type="text"
              id="role"
              name="role"
              placeholder="Team Role"
              value={team.role}
              onChange={handleChange}
            />
          </label>
          <br /><button>Submit!</button>
        </form>
      </div>

      <div>
        <TeamList list={list} />
      </div>
    </div>
  );
}

export default App;
