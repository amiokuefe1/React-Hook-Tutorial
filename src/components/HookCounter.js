import React, {useState} from 'react'

function HookCounter() {

	const [count, setCount] = useState(0)
	//count; intialization variable setCount; method capable of changing the state variable 

	return (
		<div>
		  <button onMouseOver = {()=> setCount(count +1)}> Count {count} </button>
		</div>
		)
}

export default HookCounter