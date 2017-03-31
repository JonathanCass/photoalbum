const InitialState = {
	index: 0,
	title: ''
}
export function indexReducer(state = InitialState, action){
	switch(action.type) {
		case 'SET_INDEX' :
			return { index : action.index}
		default:
			return state
	}
}