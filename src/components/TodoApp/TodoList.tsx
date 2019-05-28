import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AdditionalInformation from '../AdditionalInformation';
import todosData from './todosData';
import './TodoList.css';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState(todosData);
  const [formInput, setFormInput] = useState('');
  const handleCheckBox = (id: number): void => {
    setTodos(() => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return updatedTodos;
    });
  };

  const handleDeleteItem = (item: TodoItem): void => {
    const tempTodo: TodoItem[] = [...todos];
    const index: number = tempTodo.indexOf(item);
    tempTodo.splice(index, 1);
    // change id of list - this is to ensure that when we add an item
    // the id of the new item will be unique
    for (let i = 0; i < tempTodo.length; i += 1) {
      tempTodo[i].id = i + 1;
    }
    setTodos(tempTodo);
  };

  const handleEnterInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormInput(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newItem: TodoItem = {
      id: todos.length + 1,
      text: formInput,
      completed: false,
    };
    const newTodos: TodoItem[] = [...todos];
    newTodos.push(newItem);
    setTodos(newTodos);
    setFormInput('');
  };

  const todoComponents = todos.map(item => (
    <TodoItem key={item.id} item={item} onCheckBox={handleCheckBox} onDeleteItem={handleDeleteItem} />
  ));

  const content = (
    <main className="todo-list-page">
      <div className="content-wrap">
        <h1>Todo List</h1>
        <div className="todo-list">
          {todoComponents}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="todoInput"
              placeholder="Enter todo item"
              value={formInput}
              onChange={handleEnterInput}
            />
            <button>Submit</button>
          </form>
        </div>
        <AdditionalInformation>
          <p>The goal was to learn how to build forms with ReactJS</p>
          <p>
            The tutorial can be found here:{' '}
            <a href="https://scrimba.com/playlist/p7P5Hd" className="external-link">
              https://scrimba.com/playlist/p7P5Hd
            </a>{' '}
          </p>
          <p>My own addition is the delete function</p>
        </AdditionalInformation>
      </div>
    </main>
  );

  return content;
};

export default TodoList;

/* App created alongside code along tutorial by Bob Ziroll at scrimba.com.
 *App was updated to allow editing by user on the 25/4.
 *App uses controlled form
 *Learnt a naming convention for multiple handlers
 *Had difficulties with using hooks and setInterval
 */
// TODO find way to mimic the way class based components map new changes onto state
// see if my handle submit button is done correctly, value was attained from state
// I'm not sure if that's the best way to do it
// shift all delete icons to the right
