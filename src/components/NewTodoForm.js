import React, { Component } from 'react';

import { v1 as uuid } from "uuid";

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        }
        )
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.createTodo({ ...this.state, id: uuid(), completed: false });
        this.setState({
            task:" "
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task" className="font-weight-bold">New Todo</label>
                    <input className="form-control" type="text" name="task" placeholder="Enter New Todo" value={this.state.task} onChange={this.handleChange} />

                </form>
            </div>
        );
    }
}

export default NewTodoForm;