import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Heading from '../components/heading'
import Layout from '../components/layout'
import Card from '../components/card'
import Row from '../components/row'
import Col from '../components/col'
import ButtonGroup from '../components/buttongroup'
import Button from '../components/button'
import Paragraph from '../components/paragraph'

const Reports = () => {
	return (
		<Layout>
			<Heading rank="1">Reports</Heading>
			<Paragraph type="intro">Suspendisse massa metus, scelerisque quis tempor vel, scelerisque sed lacus. </Paragraph>
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
									path="/publications/an-endless-tragedy" />
							</ButtonGroup>
						</Card.content>
					</Card>
				</Col>
				<Col sm="6">
					<Card>
						<StaticImage
							src="../images/yazidi-genocide.jpg"
							alt="Report on the Yazidi Genocide"
						/>
						<Card.content>
							<Heading rank="3" content="">Report on the Yazidi Genocide</Heading>
							<Heading rank="4" content="">Mapping Atrocity in Iraq and Syria / 30 Oct 2017</Heading>
							<ButtonGroup>
								<Button.download
									level="primary"
									fileName="report-on-the-yazidi-genocide.pdf"
								/>
								<Button.pageLink level="secondary"
									path="/publications/an-endless-tragedy" />
							</ButtonGroup>
						</Card.content>
					</Card>
				</Col>
				<Col sm="6">
					<Card>
						<StaticImage
							src="../images/Idlib-left-breathless-by-jeff-passetti.jpg"
							alt="Idlib Left Breathless"
						/>
						<Card.content>
							<Heading rank="3" content="">Idlib Left Breathless</Heading>
							<Heading rank="4" content="">The Chemical Attack in Khan Sheikhoun / 4 April 2017</Heading>
							<ButtonGroup>
								<Button.download
									level="primary"
									fileName="Idlib-left-breathless.pdf"
								/>
								<Button.pageLink level="secondary"
									path="/publications/an-endless-tragedy" />
							</ButtonGroup>
						</Card.content>
					</Card>
				</Col>
				<Col sm="6">
					<Card>
						<StaticImage
							src="../images/covered-in-dust-veiled-by-shadow-by-jeff-passetti.jpg"
							alt="Covered in dust, veiled by shadow"
						/>
						<Card.content>
							<Heading rank="3" content="">Covered in dust, veiled by shadow</Heading>
							<Heading rank="4" content="">The Siege And Destruction Of Aleppo</Heading>
							<ButtonGroup>
								<Button.download
									level="primary"
									fileName="covered-in-dust-veiled-by-shadow.pdf"
								/>
								<Button.pageLink level="secondary"
									path="/reports/an-endless-tragedy" />
							</ButtonGroup>
						</Card.content>
					</Card>
				</Col>
				<Col sm="6">
					<Card>
						<StaticImage
							src="../images/05.jpg"
							alt="Looking through the window darkly"
						/>
						<Card.content>
							<Heading rank="3" content="">Looking through the window darkly</Heading>
							<Heading rank="4" content="">A Snapshot Analysis of Rape in Syria / 2011–2015</Heading>
							<ButtonGroup>
								<Button.download
									level="primary"
									fileName="looking-through-the-window-darkly.pdf"
								/>
								<Button.pageLink level="secondary"
									path="/publications/an-endless-tragedy" />
							</ButtonGroup>
						</Card.content>
					</Card>
				</Col>
				
			</Row>
		</Layout>
	)
}
export default Reports;
