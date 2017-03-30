import store from '../store'

export function setIndex(index) {
	store.dispatch({
		type: 'SET_INDEX',
		index: index
	})
}