import React from 'react'
import classNames from 'classnames/bind'
import { Link } from "gatsby"
import Nav from './nav'
import Icon from './icon'
import Divider from './divider'

import { StaticImage } from "gatsby-plugin-image";

import * as styles from './header.module.scss';

let cx = classNames.bind(styles);

const Header = ({position}) => {

	let headerClasses = cx({
		header: true,
		sticky : position === 'sticky'
	});


	return (
		<header className={headerClasses}>
			<Link to="/">
				<StaticImage 
					className={styles.logo}
					src="../images/syrian-accountability-project-logo.jpg" 
					alt="Syrian Accountability Project"
				/>
			</Link>
			<Nav />
			<Divider />
			<a href="https://twitter.com/sap_sucol" target="_blank" rel="noreferrer">
				<Icon.Twitter />
			</a>
			<a href="https://instagram.com/SAP_syracuselaw" target="_blank" rel="noreferrer">
				<Icon.Instagram />
			</a>
		</header>
	)
}
export default Header;
