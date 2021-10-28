import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
	state = {
		title: '',
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAddTask(this.state.title);
		this.setState({ title: '' });
	};

	render() {
		return (
			<div className="addNewTask__wrapper">
				<form className="addNewTask__form" style={{ display: 'flex' }}>
					<input
						onChange={this.onChange}
						className="addNewTask__input"
						type="text"
						placeholder="Add new task..."
						name="title"
						value={this.state.title}
					/>
					<button onClick={this.onSubmit} className="addNewTask__btn">
						+ Add
					</button>
				</form>
			</div>
		);
	}
}

AddTodo.propTypes = {
	onAddTask: PropTypes.func.isRequired,
};

export default AddTodo;
