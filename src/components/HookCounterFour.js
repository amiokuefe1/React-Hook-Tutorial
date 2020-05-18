import React, {useState} from 'react'

function HookCounterFour() {

	const [items, setItems] = useState([])
	
	const addItem = () => {
		setItems([ ... items, {
			id: items.length,
			value: Math.floor(Math.random() * 10) + 1
			//the above Math will generate random numbers 
			// from 1 to 10 upon every iteration 
			// & id value will be a summed up 
			// value of the previous iteration count
			// attached to every button click
		}]);console.log(items.length + 1)

	}

	return (
		<div>
		  <button onClick={addItem}> Add a number </button>
		  <ul>
		  	{items.map(item => (
		  		<li key={item.id}>The Item number is: {item.value} </li>
		  		))}
		  </ul>
		</div>
		)
}

export default HookCounterFour