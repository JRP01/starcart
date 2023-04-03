import { useState } from 'react'
import { useSelector } from 'react-redux'
import { List, Message, Dropdown } from 'semantic-ui-react'
import { selectFaveState } from '../../features/faves'
import Fave from './FaveContainer.tsx'

const Faves = () => {
	const [filter, setFilter] = useState(0)
	const faves = useSelector(selectFaveState)

	const handleFilterChange = (_, { value }) => {
		setFilter(value)
	}

	const filteredFaves = filter ? faves.filter(fave => fave.rating === filter) : faves

	console.log(faves)

	const ratingOptions = [
		{ key: 'all', text: 'All', value: 0 },
		{ key: '1', text: '1', value: 1 },
		{ key: '2', text: '2', value: 2 },
		{ key: '3', text: '3', value: 3 },
		{ key: '4', text: '4', value: 4 },
		{ key: '5', text: '5', value: 5 },
	]

	if (faves.length === 0) {
		return <Message header="no faves" />
	}
	return (
		<>
			<Dropdown selection options={ratingOptions} value={filter} onChange={handleFilterChange} placeholder="Filter by rating" />
			<List horizontal divided>
				{filteredFaves.map(fave => (
					<Fave key={fave.id} fave={fave} />
				))}
			</List>
		</>
	)
}

export default Faves
