import React from 'react';

function Header() {
	return (
		<React.Fragment>
			<header style={headerStyle}>
				<h1>Todo List</h1>
			</header>
		</React.Fragment>
	);
}

const headerStyle = {
	textAlign: 'center',
	background: '#333',
	color: '#fff',
	padding: '15px',
};

export default Header;
