import React, {Component} from "react";
import TodoItem from './TodoItem';
import todosData from "./todosData";
import './TodoList.css'

class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
        console.log("Changed", id)
    }

    render() {
        const todoComponents = this.state.todos.map(item =><TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return (
            <main className="todo-list-page">
                <div className='content-wrap'>
                    <h1>Todo List</h1>
                    <div className='todo-list'>
                        {todoComponents}
                    </div>
                </div>
            </main>
        );
    }
}

export default TodoList;

/*App created alongside code along tutorial by Bob Ziroll at scrimba.com */