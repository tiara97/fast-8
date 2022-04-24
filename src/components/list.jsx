const styles = {
	mainDiv: {
		display: 'flex',
		flexDirection: 'column'
	},
	imageDiv: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageUser: {
		borderRadius: '50%',
		height: '100px',
		width: '100px',
		backgroundColor: 'lightblue'
	}
};

export default function ListComponent({ userData }) {
	return (
		<div style={styles.mainDiv}>
			<h4>Personnel ID</h4>
			<div style={styles.imageDiv}>
				<img
					src={userData.picture.medium}
					alt="profile-picture"
					style={styles.imageUser}
				/>
			</div>
			<h6>Name</h6>
			<h5>
				{userData.name.first} {userData.name.last}
			</h5>
			<h6>Telephone</h6>
			<h5>{userData.phone}</h5>
			<h6>Birthday</h6>
			<h5>{userData.dob.date.substring(0, 10)}</h5>
			<h6>Email</h6>
			<h6>{userData.email}</h6>
		</div>
	);
}
