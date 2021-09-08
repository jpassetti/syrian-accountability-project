import React from 'react';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';
import Layout from '../components/layout';

const Contact = () => {
	return (
		<Layout>
			<Heading rank="1">Contact</Heading>
			<Paragraph type="intro">Suspendisse massa metus, scelerisque quis tempor vel, scelerisque sed lacus. </Paragraph>
			<Paragraph>If you have any questions, please email:<br />
				<a href="mailto:syrianaccountabilityproject">syrianaccountabilityproject@syr.edu</a>
			</Paragraph>
		</Layout>
	)
}
export default Contact;
