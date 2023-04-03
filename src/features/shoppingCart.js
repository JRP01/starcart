import { createSlice, nanoid } from '@reduxjs/toolkit'

const createItem = item => ({
	id: nanoid(),
	...item,
})
const initialState = {
	items: [],
	total: 0,
	prices: {
		people: 10,
		starships: 20,
		vehicles: 5.5,
		planets: 100,
		films: 12.99,
	},
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducer: {
		addItem: (state, action) => {
			const newItem = createItem(action.payload)
			const existingItemIndex = state.items.findIndex(item => item.id === newItem.id)
			if (existingItemIndex >= 0) {
				state.items[existingItemIndex].quantity++
			} else {
				newItem.quantity = 1
				state.items.push(newItem)
			}
			state.total = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
		},
		removeItem: (state, action) => {
			const id = action.payload
			const existingItemIndex = state.items.findIndex(item => item.id === id)
			if (existingItemIndex >= 0) {
				state.items.splice(existingItemIndex, 1)
				state.total = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
			}
		},
		editCartItem: (state, action) => {
			const { id, quantity } = action.payload
			const existingItemIndex = state.items.findIndex(item => item.id === id)
			if (existingItemIndex >= 0) {
				state.items[existingItemIndex].quantity = quantity
				state.total = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
			}
		},
	},
})

export const { addItem, removeItem } = cartSlice
