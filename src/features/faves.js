import { createSlice, current, nanoid } from '@reduxjs/toolkit'

const createFave = (fave, name) => ({
	id: nanoid(),
	rating: 5,
	name,
	...fave,
})
const initialState = []

export const favesSlice = createSlice({
	name: 'faves',
	initialState,
	reducers: {
		addFave: (state, action) => {
			const name = action.payload.name ? action.payload.name : action.payload.title ? action.payload.title : 'no name'
			const existingFave = state.find(fave => fave.name === name)
			if (!existingFave) {
				const fave = createFave(action.payload, name)
				state.push(fave)
			}
		},
		updateFave: (state, action) => {
			// find fave
			// update fave with array of ids if none exists,
			// or add related id if doesn't exist in array already
			// return state
		},
		rateFave: (state, action) => {
			console.log(action.payload)
			const { id, rating } = action.payload
			const faveIndex = state.findIndex(fave => fave.id === id)
			console.log(action.payload)
			if (faveIndex !== -1) {
			  state[faveIndex].rating = rating
			}
		},
		removeFave: (state, action) => {
			// const id = action.payload
			console.log('faves', current(state))
			/*
			 ! remove fave code here */
			/*
			 * make sure to return the whole state because it's just a single array of faves */
			// return state.???
			const id = action.payload
			const index = state.findIndex(fave => fave.id === id)
			if (index !== -1) {
				state.splice(index, 1)
			}
		},
	},
})

export const { addFave, removeFave, rateFave } = favesSlice.actions
export const selectFaveState = state => state.faves
