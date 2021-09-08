import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames/bind';

import * as styles from './button.module.scss';

let cx = classNames.bind(styles);

const Button = ({children}) => {
	return (
		<button className={styles.btn}>{children}</button>
	)
}
const ButtonPageLink = ({level, path}) => {
	let classNames = cx({
		btn: true,
		primary: level === "primary",
		secondary: level === "secondary",
	});
	return <Link to={path} className={classNames}>More information</Link>
}
Button.pageLink = ButtonPageLink;

const ButtonDownload = ({level, fileName}) => {
	let classNames = cx({
		btn: true,
		primary: level === "primary",
		secondary: level === "secondary",
	});
	return <a className={classNames} href={fileName}>Download PDF</a>
}

Button.download = ButtonDownload;

export default Button;
