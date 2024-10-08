import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
	render() {
		let {
			id,
			type,
			value,
			html,
			markAsRead
		} = this.props;

		return (
			<Fragment>
				{
					html !== undefined &&
					<li
						onClick={() => markAsRead(id)}
						data-priority-type={type}
						dangerouslySetInnerHTML={html}
					/>
				}
				{
					html === undefined &&
					<li
						onClick={() => markAsRead(id)}
						data-priority-type={type}
					>
						{value}
					</li>
				}
			</Fragment>
		);
	};
};

NotificationItem.propTypes = {
	html: PropTypes.shape({
		__html: PropTypes.string,
	}),
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
	type: "default",
};

export default NotificationItem;
