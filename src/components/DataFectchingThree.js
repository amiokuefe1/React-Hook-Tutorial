import React, {useState, useEffect} from 'react'

import axios from 'axios'

function DataFetchingThree() {

	const [post, setPost] = useState({})
	// this fetch a single post at a time which is an object datatype
	const [id, setId] = useState(1)
	// this will fetch the value of whatever the post id will be as a number datatype
	const [idFromButtonClick, setIdFromButtonClick] = useState(1)
	// this will collect any given id value and post it on a click event

	const handleClick = () => {
		setIdFromButtonClick(id)
		// the above will fetch whatever the id value is from the user & pass that value to the Onclick function above
	}

	useEffect(() => {
		axios.get(`http://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
		// the above will only fetch the post with the specified id value from the click event
		.then(
			res => {
				console.log(res)
				setPost(res.data)}
			// the above fetches the data that comes with the Promised response
			)
		.catch(err => console.log(err))
	}, [idFromButtonClick])
	 // the first argument of the useEffect function depends on the second argument(which is an array) so as to prevent an infinite loop of DataFetching

	 return(<div>
	 			<input type='text' value={id} onChange={
	 				e => {setId(e.target.value)} } />

	 			<input type='button' onClick={handleClick} value='Fetch Post' />

	 			<div> {post.title} </div>
	 		</div>
	 	)
}

export default DataFetchingThree