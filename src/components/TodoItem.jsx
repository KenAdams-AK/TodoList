import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	onLineThrough = () => {
		if (this.props.todoItem.completed) {
			return {
				textDecoration: 'line-through',
				opacity: '0.35',
			};
		}
	};

	render() {
		const { id, title } = this.props.todoItem;
		const { onComplete, onDelete } = this.props;

		return (
			<div className="todoItem__wrapper">
				<input onChange={onComplete.bind(this, id)} type="checkbox" />
				<p className="todoItem__title" style={this.onLineThrough()}>
					{title}
				</p>
				<button onClick={onDelete.bind(this, id)} className="todoItem__btn">
					Delete
				</button>
			</div>
		);
	}
}

TodoItem.propTypes = {
	todoItem: PropTypes.object.isRequired,
	onComplete: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
