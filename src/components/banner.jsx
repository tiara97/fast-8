import {
  Button,
  Form,
  FormControl,
} from 'react-bootstrap';

const styles = {
	mainDiv: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	titleDiv: { display: 'flex', flexDirection: 'column' },
	form: { height: '40px' }
};

export default function BannerComponent() {
	return (
		<div style={styles.mainDiv}>
			<div style={styles.titleDiv}>
				<h1>Personnel list</h1>
				<h4>List of all personnels</h4>
			</div>
			<Form className="d-flex" style={styles.form}>
				<FormControl
					type="search"
					placeholder="Search"
					className="me-2"
					aria-label="Search"
				/>
				<Button variant="outline-success">Search</Button>
			</Form>
		</div>
	);
}
