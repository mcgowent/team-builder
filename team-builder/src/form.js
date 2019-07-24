import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={event => props.handleSubmit(event)}>
            <label>
                Add New Team Members:<br />
                <label>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="username"
                    placeholder="Team Member"
                    value={props.team.username}
                    onChange={props.handleChange}
                />
                <br /><label>Email:</label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={props.team.email}
                    onChange={props.handleChange}
                />
                <br /><label>Team Role:</label>

                <input
                    type="text"
                    id="role"
                    name="role"
                    placeholder="Team Role"
                    value={props.team.role}
                    onChange={props.handleChange}
                />
            </label>
            <br /><button>Submit!</button>
        </form>
    )
}

export default Form;