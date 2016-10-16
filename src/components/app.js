/**
 * Created by vincentveltri on 10/16/16.
 */

import React from 'react';
import TodosList from './todos-list';

const todos = [
	{
		task: 'make React tutorial',
		isCompleted: false
	},
	{
		task: 'eat dinner',
		isCompleted: true
	}
];

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>React ToDos App</h1>
				<TodosList/>
			</div>
		);
	}
}