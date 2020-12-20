import React, { PureComponent } from 'react';

export default class Option extends PureComponent {
	onSelect = () => {
		this.props.onSelect(this.props.index, this.props.value);
	};

	render() {
		return (
			<div
				className={`Dropdown__option ${this.props.selected
					? 'Dropdown__option--selected'
					: ''}`}
				onClick={this.onSelect}
			>
				{this.props.children}
			</div>
		);
	}
}
