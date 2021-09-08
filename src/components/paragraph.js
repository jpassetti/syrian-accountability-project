import React from 'react';
import classNames from 'classnames/bind';
import * as styles from './paragraph.module.scss';

let cx = classNames.bind(styles);

const Paragraph = ({type, children}) => {

	let paragraphClasses = cx({
		paragraph: true,
		intro: type === 'intro'
	});

	return (
		<p className={paragraphClasses}>{children}</p>
	);
}
export default Paragraph;
