import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from '../components/layout'
import Row from '../components/row'
import Col from '../components/col'
import Card from '../components/card'
import ButtonGroup from '../components/buttongroup'
import Button from '../components/button'
import Heading from '../components/heading'
import Paragraph from '../components/paragraph'


// markup
const IndexPage = () => {
  return (
	 <Layout>
		<title>Syrian Accountability Project</title>
		<section>
			<Paragraph type="intro"><strong>The Syrian Accountability Project (SAP)</strong> is an internationally recognized cooperative effort between activists, non-governmental organizations, students, and other interested parties to document war crimes and crimes against humanity in the context of the Syrian Crisis.</Paragraph>
			<Paragraph>Now in its fifth phase, the project aims to produce non-partisan, high quality analysis of open source materials and to catalogue that information relative to applicable bodies of law; including, the Geneva Conventions, the Rome Statute of the International Criminal Court, and Syrian Penal Law.</Paragraph>
			<Paragraph>The SAP primarily creates documentation products in a narrative and graphical format, as well as a quarterly and annual trend analysis of ongoing crimes. Furthermore, the SAP publishes issue-specific white papers. Its clients include the Syrian National Council, United Nations, U.S. Department of State, and the International Criminal Court.</Paragraph>
		</section>
		<section>
			<Heading mt="4" rank="3">Lastest report</Heading>
			<Row>
				  <Col sm="6">
					  <Card>
						  <StaticImage
							  src="../images/gaza-crimes.jpg"
							  alt="Gaza Crimes"
						  />
						  <Card.content>
							  <Heading rank="3" content="">An Endless Tragedy</Heading>
							  <Heading rank="4" content="">A Report on the Incidents Regarding Demonstrations in Gaza March 2018 to December 2018</Heading>
							  <ButtonGroup>
								  <Button.download
									  level="primary"
									  fileName="an-endless-tragedy.pdf"
								  />
								  <Button.pageLink level="secondary"
									  path="/reports/an-endless-tragedy" />
							  </ButtonGroup>
						  </Card.content>
					  </Card>
				  </Col>
			</Row>
		</section>
	</Layout >
  )
}

export default IndexPage
