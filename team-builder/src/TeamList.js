import React from 'react';

const TeamList = (props) => {
    return (
        <p className="cards">{props.list.map(e => {
            return (
                <div className="outter-card">
                    <div className="card">
                        <h1>Name: {e.username}</h1>
                        <p>Email: {e.email}</p>
                        <p>Role: {e.role}</p>
                    </div>
                    <button onClick={() => {
                        props.setNewValue(e);
                        props.setEditing(true);
                    }} className="button">Edit</button>
                </div>
            )
        })}</p>
    )
}

export default TeamList;