import React, { PureComponent, Children, cloneElement } from 'react';
import { Button } from 'chramework';
import './Dropdown.css';

export default class Dropdown extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			activeOptionIndex: -1,
			isOpen: false,
		};
	}

	getAdditionalProps = (index, props) => ({
		onSelect: this.onSelect,
		index,
		selected: index === this.state.activeOptionIndex,
		...props,
	});

	getChildrenOptionssWithProps = () => {
		return Children.map(this.props.children, (child, index) =>
			cloneElement(child, this.getAdditionalProps(index, child.props)),
		);
	};

	getActiveOptionLabel = () => {
		const { children } = this.props;
		const { activeOptionIndex } = this.state;
		const currentChildren = children[activeOptionIndex];

		if (currentChildren) {
			return currentChildren.props.children;
		}

		return false;
	};

	toggleList = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	onSelect = (optionIndex, value) => {
		const { onSelect } = this.props;

		this.setState({
			activeOptionIndex: optionIndex,
			isOpen: false,
		});

		if (onSelect !== 'undefined') onSelect(value);
	};

	render() {
		const childrenOptionssWithProps = this.getChildrenOptionssWithProps();
		const label = this.getActiveOptionLabel();

		return (
			<div className="Dropdown">
				<Button onClick={this.toggleList} text={label || 'ENG'} />
				{this.state.isOpen && (
					<div className="Dropdown__list">{childrenOptionssWithProps}</div>
				)}
			</div>
		);
	}
}
