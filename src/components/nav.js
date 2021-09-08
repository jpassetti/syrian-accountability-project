import React from 'react';
import { Link } from "gatsby";

import * as styles from './nav.module.scss';

const navLinks = [
	{
		title: "Home",
		path: "/"
	},
	{
		title: "About",
		path: "/about"
	},
	{
		title: "Reports",
		path: "/reports"
	},
	{
		title: "Team",
		path: "/team"
	},
	{
		title: "Contact",
		path: "/contact"
	},
];


const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navLinks.map((navLink, index) => {
					const {path, title} = navLink;
					return <li key={index}>
						<Link to={path} className={styles.navLink} activeClassName={styles.navLinkActive}>{title}</Link>
					</li>
				})}
			</ul>
		</nav>
	)
}
export default Nav;
