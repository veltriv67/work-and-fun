/**
 * Created by vincentveltri on 10/16/16.
 */

import React from 'react';

export default class TodosListItem extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			isEditing: false
		};
	}

	onEditClick() {
		this.setState({isEditing: true});
	}

	onCancelClick() {
		this.setState({isEditing: false});
	}

	render() {
		return (
			<tr>
				<td>{this.props.task}</td>
				{this.renderActionSection()}
			</tr>
		);
	}

	renderActionSection() {
		if (this.state.isEditing) {
			return (
				<td>
					<button>Save</button>
					<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
				</td>
			);
		}

		return (
			<td>
				<button onClick={this.onEditClick.bind(this)}>Edit</button>
				<button>Delete</button>
			</td>
		);
	}
}