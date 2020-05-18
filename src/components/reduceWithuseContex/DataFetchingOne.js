import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne(){
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')
	const [post, setPost] = useState({})

	useEffect(() =>{
		axios.get('http://jsonplaceholder.typicode.com/posts/1')
		 .then(res=>{
		 	setLoading(false)
		 	// the above stops the loading variable from running after the request has returned a Resolved Promise
		 	console.log(res)
		 	setPost(res.data)
		 	setError('')
		 	// the above gives an empty error string when the post Data is Fetched
		 })
		 .catch(err=>{
		 	setLoading(false)
		 	// the above stops the loading variable from running after the request has returned a Rejected Promise
		 	setPost({})
		 	setError('Something went wrong')
		 	// the above returns a string of the error
		 	console.log(err)
		 	// the above return the javascript err name & message
		 })
	}, [])

	return(
		<div>
			{loading ? 'Loading': post.title}
		{/* ternary operator in use*/}
			{error ? error: null}
		</div>
	)
}

export default DataFetchingOne