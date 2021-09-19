import React from 'react';
import { Link } from 'gatsby';
import Heading from './heading';

const Category = ({label, path=false}) => {
  	return path ? <Heading rank="5"><Link to={path}>{label}</Link></Heading>
	  : <Heading rank="5">{label}</Heading>
}
export default Category;
