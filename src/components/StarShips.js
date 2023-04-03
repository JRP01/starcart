import { Button, Card, Loader, Message } from 'semantic-ui-react'
import { useGetStarshipsQuery } from '../services/swapApi'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { addFave } from '../features/faves'

const Characters = () => {
	const { data, isError, isLoading } = useGetStarshipsQuery()
	const dispatch = useDispatch()

	const selectStarship = e => {
		const { name } = e.currentTarget.dataset
		const starship = data.results.find(starship => starship.name === name)
		return starship
	}
	const addToFavourites = e => dispatch(addFave(selectStarship(e)))

	console.log(data)

	if (isLoading) {
		return <Loader active={isLoading} />
	}
	if (isError) {
		return <Message error={isError}>There was an error</Message>
	}
	if (data && Boolean(data?.results?.length)) {
		return (
			<Card.Group centered>
				{data.results.map(starship => (
					<Card key={nanoid()}>
						<Card.Content>
							<Card.Header>{starship.name}</Card.Header>
							{starship && starship.films && <Card.Meta> films : {starship.films.length}</Card.Meta>}
							<Card.Description>
							Passengers {starship.passengers}
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<Button
								icon={{ name: 'plus', size: 'small' }}
								data-name={starship.name}
								positive
								content="Add to faves"
								onClick={addToFavourites}
							/>
						</Card.Content>
					</Card>
				))}
			</Card.Group>
		)
	} else if (data?.results?.length === 0) {
		return <Message warning>no films found</Message>
	}
	return null
}
export default Characters



