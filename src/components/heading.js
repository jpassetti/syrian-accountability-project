import React from 'react';
import classNames from 'classnames/bind';
import * as styles from './heading.module.scss';

let cx = classNames.bind(styles);

const Heading = ({
	rank = 2,
	children,
	type = 'headline',
	mt
}) => {
	const Tag = rank > 6 ? 'h6' : `h${rank}`;

	let headingClasses = cx({
		heading: true,
		[`${Tag}`]: rank,
		[`mt-4`]: mt === "4"
	});


	return (
		<Tag className={headingClasses}>
			{children}
		</Tag>
	);
};
export default Heading;
