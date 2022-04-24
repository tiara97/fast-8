const INIT_STATE = {
	userData: []
};

export const userReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case 'GET_USER':
			console.log(action.payload);
			return { ...state, userData: action.payload };
		default:
			return state;
	}
};
