import { render, fireEvent, screen } from '@testing-library/react'
import FaveItem from './FaveItem'

describe('FaveItem', () => {
	const fave = {
		id: 123,
		name: 'Test Fave',
		rating: 3,
	}

	const handleRating = jest.fn()
	const handleRemove = jest.fn()

	it('renders the fave name', () => {
		render(<FaveItem fave={fave} handleRating={handleRating} handleRemove={handleRemove} />)
		expect(screen.getByText(fave.name)).toBeInTheDocument()
	})

	it('calls handleRemove when the remove button is clicked', () => {
		render(<FaveItem fave={fave} handleRating={handleRating} handleRemove={handleRemove} />)
		fireEvent.click(screen.getByTestId('delete'))
		expect(handleRemove).toHaveBeenCalled()
	})
})
