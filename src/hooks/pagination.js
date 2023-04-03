import { useState } from 'react'
const usePagination = data => {
	const [activePage, setActivePage] = useState(1)
	const [paginatedData, setPaginatedData] = useState([])

	/* 
    ? your code here
    */

	return {
		activePage,
		paginatedData,
	}
}

export default usePagination
