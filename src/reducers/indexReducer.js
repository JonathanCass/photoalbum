const InitialState = {
	index: 0
}
export function indexReducer(state = InitialState, action){
	switch(action.type) {
		case 'SET_INDEX' :
			return { index : action.index} 
		default:
			return state
	}
}