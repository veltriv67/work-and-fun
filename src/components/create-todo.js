/**
 * Created by vincentveltri on 10/16/16.
 */

import React from 'react';

export default class TodosList extends React.Component {
	handleCreate(e) {
		e.preventDefault();
		console.log(this.refs.createInput.value);
	}

	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="What do I need to do?" ref="createInput" />
				<button>Create</button>
			</form>
		);
	}
}