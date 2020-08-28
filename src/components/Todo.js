import React, { Component } from 'react';
import './Todo.css';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleRemove() {
        this.props.removeTodo(this.props.id)
    }
    toggleForm() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    handleUpdate(event) {
        event.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({
            isEditing: false
        })
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        }
        )
    }
    handleToggle(event) {
        event.preventDefault();
        this.props.toggleTodo(this.props.id)
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result = <div>
                <form onSubmit={this.handleUpdate}>
                    <input className="form-control mt-3" type="text" id="task" value={this.state.task} name="task" onChange={this.handleChange} />
                    <button className="btn btn-success mt-3">Save</button>
                </form>
            </div>
        }
        else {
            result = (<div>

                <li className="list-group-item mt-3"><i class="fal fa-circle" aria-checked="true" onClick={this.handleToggle}><span className={this.props.completed ? "completed" : " "} >{this.props.task}</span></i>
                    <span className="spacing"><i className="fa fa-pencil" onClick={this.toggleForm}></i></span>
                    <span className="spacing"><i className="fa fa-trash" onClick={this.handleRemove}></i></span>
                </li>

            </div>)
        }
        return (
            result
        );
    }
}

export default Todo;