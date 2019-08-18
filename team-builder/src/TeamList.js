import React from 'react';

const TeamList = (props) => {


    return (
        <div className="cards">{props.list.map(e => {
            return (
                <div key={e.username} className="outter-card">
                    <div className="card">
                        <h1>Name: {e.username}</h1>
                        <p>Email: {e.email}</p>
                        <p>Role: {e.role}</p>
                    </div>
                    <button className="button" onClick={() => props.removeItem(e.username)}>Remove</button>
                    <button onClick={() => {
                        props.setNewValue(e);
                        props.setEditing(true);
                    }} className="button">Edit</button>
                </div>
            )
        })}</div>
    )
}

export default TeamList;