import React from "react";


const Form = (props) => {
    return (
        <div class="form-style-6">
            <h1>Add New Team Members</h1>
            <form className="form" onSubmit={event => props.handleSubmit(event)}>

                <input
                    type="text"
                    id="name"
                    name="username"
                    placeholder="Team Member"
                    value={props.team.username}
                    onChange={props.handleChange}
                />

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={props.team.email}
                    onChange={props.handleChange}
                />

                <input
                    type="text"
                    id="role"
                    name="role"
                    placeholder="Team Role"
                    value={props.team.role}
                    onChange={props.handleChange}
                />
                <button className="button">Submit!</button>
            </form>
        </div>
    )
}

export default Form;