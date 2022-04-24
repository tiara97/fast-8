import './App.css';

import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

import NavLeftComponent from './components/nav';
import NavbarComponent from './components/navbar';
import Home from './pages/home';

function App() {
	return (
		<Container fluid>
			<NavbarComponent />
			<Row>
				<Col xs="auto" md="auto" lg="auto">
					<NavLeftComponent />
				</Col>
				<Col style={{ width: '100%', maxWidth: '100%' }}>
					<Home />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
