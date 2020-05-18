import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

	const [posts, setPosts] = useState([])
	const [id, setId] = useState(1)

	useEffect(() => {
		axios.get('http://jsonplaceholder.typicode.com/posts')
		 	.then(res => {
		 		console.log(res)
		 		setPosts(res.data)
		 	})
		 	.catch(err=>{
		 		console.log(err)
		 	})
	}, [])
	// the empy array ensures we don't have an infinite loop of Datafetching
	return(
		<div>
			<input type="text" value={id} onChange ={e => setId(e.target.value)} />
			<ul>
				{
					posts.map(post =>(
						<li key={post.id}> 

						{post.title} </li>
						))
				}
			</ul>
		</div>
		)
}

export default DataFetching