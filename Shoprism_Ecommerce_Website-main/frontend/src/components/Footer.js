import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						{/* Divya Reddy */}
						<a
							rel='noopener noreferrer'
							href='https://github.com/divyareddy083'
							target='_blank'
							className='melvin-kisten'
						>
							<i className='fas fa-user-circle'></i> Divya Reddy Github
						</a>
						Copyright &copy; 2025 Divya Reddy
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
