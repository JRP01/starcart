import { SyntheticEvent } from 'react'
import { useDispatch } from 'react-redux'
import { RatingProps } from 'semantic-ui-react'
import { removeFave, rateFave } from '../../features/faves'
import FaveItem from './FaveItem'
import { FaveItemObj } from './types'

const FaveContainer = ({ fave }: { fave: FaveItemObj }) => {
	const dispatch = useDispatch()
	/* 
    ? dispatch the action from the faves features slice to update the rating of the selected fave
    */
	const handleRating = (_e: SyntheticEvent, data: RatingProps) => {
		const rating = data.rating as number
		dispatch(rateFave({ id: fave.id, rating }))
	}
	const handleRemove = () => {
		/* 
	 ? remove the Fave from the list here:
	 */
		dispatch(removeFave(fave.id))
	}

	return <FaveItem fave={fave} handleRating={handleRating} handleRemove={handleRemove} />
}
export default FaveContainer
