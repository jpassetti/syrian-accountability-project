import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import Row from './row'
import Col from './col';
import Heading from './heading';
import Paragraph from './paragraph';

const people = [
	{
		name: "John Smith",
		job: "Job title",
		organization: "Organization name"
	},
	{
		name: "John Smith",
		job: "Job title",
		organization: "Organization name"
	},
	{
		name: "John Smith",
		job: "Job title",
		organization: "Organization name"
	},
	{
		name: "John Smith",
		job: "Job title",
		organization: "Organization name"
	},
	{
		name: "John Smith",
		job: "Job title",
		organization: "Organization name"
	},
	{
		name: "John Smith",
		job: "Job title",
		organization: "Organization name"
	},
];

const Stack = () => {
	return <section>
		<Row>
		{people.map((person, index) => {
			return <Col key={index} sm="6">
				<Row>
					<Col xs="3" sm="3">
						<StaticImage
							src="../images/sample-profile-image.jpg"
							alt={person.name}
							className="rounded"
						/>
					</Col>
					<Col xs="9" sm="9">
						<Heading rank="3">{person.name}</Heading>
						<Heading rank="4">{person.job}</Heading>
						<Paragraph>{person.organization}</Paragraph>
					</Col>
				</Row>
			</Col>
		})}
		</Row>
	</section>
}
export default Stack;
