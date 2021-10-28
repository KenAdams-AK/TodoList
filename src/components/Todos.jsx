import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export class Todos extends Component {
	render() {
		const { onComplete, onDelete } = this.props;

		return this.props.todos.map((todo) => (
			<TodoItem
				key={todo.id}
				todoItem={todo}
				onComplete={onComplete}
				onDelete={onDelete}
			/>
		));
	}
}

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	onComplete: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default Todos;
