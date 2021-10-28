import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import Todos from './components/Todos';

class App extends Component {
	state = {
		todos: [
			{
				id: uuidv4(),
				title: 'item 1',
				completed: false,
			},
			{
				id: uuidv4(),
				title: 'item 2',
				completed: false,
			},
			{
				id: uuidv4(),
				title: 'item 3',
				completed: false,
			},
			{
				id: uuidv4(),
				title: 'item 4',
				completed: false,
			},
			{
				id: uuidv4(),
				title: 'item 5',
				completed: false,
			},
		],
	};

	onComplete = (itemId) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === itemId) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	onDelete = (itemId) => {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== itemId),
		});
	};

	onAddTask = (newItemTitle) => {
		const newTodoItem = {
			id: uuidv4(),
			title: newItemTitle,
			completed: false,
		};

		if (newItemTitle.length > 0) {
			this.setState({
				todos: [...this.state.todos, newTodoItem],
			});
		}
	};

	render() {
		return (
			<React.Fragment>
				<div className="container">
					<Header />
					<AddTodo onAddTask={this.onAddTask} />
					<Todos
						todos={this.state.todos}
						onComplete={this.onComplete}
						onDelete={this.onDelete}
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
