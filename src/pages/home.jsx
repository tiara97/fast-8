import {
  useEffect,
  useState,
} from 'react';

import {
  Button,
  Container,
} from 'react-bootstrap';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useLocation } from 'react-router-dom';

import getUserData from '../actions/user-actions';
import BannerComponent from '../components/banner';
import ListComponent from '../components/list';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		height: 'auto'
	},
	listDiv: { display: 'flex', justifyContent: 'space-around' }
};

export default function Home() {
	const dispatch = useDispatch();
	const { state } = useLocation();
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(4);
	const { userData } = useSelector((state) => {
		return {
			userData: state.userReducer.userData
		};
	});

	useEffect(() => {
		dispatch(getUserData());
	}, [state]);

	const printUserData = () => {
		console.log(page, userData.length);
		if (userData.length > 0)
			return userData
				.slice(page > 1 ? (page - 1) * limit : page - 1, page * limit)
				.map((item, i) => {
					return <ListComponent userData={item} />;
				});
	};

	const prevPageAct = () => {
		return setPage(page - 1);
	};

	const nextPageAct = () => {
		return setPage(page + 1);
	};

	return (
		<Container style={styles.container}>
			<BannerComponent />
			<div style={styles.listDiv}>{printUserData()}</div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<Button
					variant="outline-secondary"
					disabled={page === 1 ? true : false}
					onClick={prevPageAct}
				>
					Previous Page
				</Button>
				<div style={{ width: '50px' }}></div>
				<Button 
					variant="outline-secondary"
					disabled={ page * limit >=  userData.length  ? true : false} 
					onClick={nextPageAct}>
					Next Page
				</Button>
			</div>
		</Container>
	);
}
