import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';

export default function NavbarComponent() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">Gadjian</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link>Link</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<Navbar.Text>Hallo, Gadjian User</Navbar.Text>
				<img
					src="../assets/profile.jpg"
					width="30"
					height="30"
					style={{ borderRadius: '50%' }}
				/>
			</Container>
		</Navbar>
	);
}
