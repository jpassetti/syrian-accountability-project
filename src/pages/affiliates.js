import React from 'react';

import Layout from '../components/layout';
import Row from '../components/row'
import Col from '../components/col';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';
import Category from '../components/category';

const affiliates = [
	{
		name: "Global Accountability Network"
	},
	{
		name: "University of Toronto",
		url: "https://www.utoronto.ca/"
	},
	{
		name: "Florida International University",
		url: "https://www.fiu.edu/"
	},
	{
		name: "Suffolk University",
		url: "https://www.suffolk.edu/"
	},
	{
		name: "University of Michigan",
		url: "https://umich.edu/"
	},
	{
		name: "Washington University- St. Louis",
		url: "https://wustl.edu/"
	},
	{
		name: "Case Western Reserve University",
		url: "https://case.edu/"
	},
];

const Contact = () => {
	return (
		<Layout>
			<Heading rank="1">Affiliates</Heading>
			<Paragraph type="intro">Suspendisse massa metus, scelerisque quis tempor vel, scelerisque sed lacus. </Paragraph>
			<Row>
			{
				affiliates.map((affiliate, index) => {
					return <Col key={index} sm="4">
						<Heading rank="3">{affiliate.name}</Heading>
						<Paragraph><a href={affiliate.url} target="_blank">{affiliate.url}</a></Paragraph>
					</Col>
				})
			}
			</Row>
		</Layout>
	)
}
export default Contact;
