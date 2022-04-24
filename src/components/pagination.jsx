import { Button } from 'react-bootstrap';

export default function PaginationComponent({ page }) {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<Button variant="outline-secondary" disabled={page === 1 ? true : false}>
				Previous Page
			</Button>{' '}
			<div style={{ width: '50px' }}></div>
			<Button variant="outline-secondary">Next Page</Button>{' '}
		</div>
	);
}
