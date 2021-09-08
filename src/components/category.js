import React from 'react';
import { Link } from 'gatsby';
import Heading from './heading';

const Category = ({label, path}) => {
	if (path) return <Heading rank="5"><Link to={path}>{label}</Link></Heading>
	return <Heading rank="5">{label}</Heading>
}
export default Category;
