import Axios from 'axios';

export default function getUserData() {
	return async (dispatch) => {
        const url = 'https://randomuser.me/api/?results=28'
		try {
			const res = await Axios.get(url);
            dispatch({
                type: 'GET_USER',
                payload: res.data.results
            })
		} catch (e) {
            console.error(e.toString())
        }
	};
}
