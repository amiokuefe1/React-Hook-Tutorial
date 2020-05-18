import React, {useReducer} from 'react'

const initialState = 0

const reducer = (state, action) =>{
	switch(action) {
		case 'increment':
		 return state + 1
		case 'decrement':
		 return state - 1
		case 'reset':
		 return initialState
		default:
		  return state
	}
}

function CountOne() {

	const [count, dispatch] = useReducer(reducer, initialState)
	const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

	return (
		<div>
			<div> Count - {count} </div>
			<button onClick={() => dispatch('increment')}> Increment </button>
			<button onClick={() => dispatch('decrement')}> Decrement </button>
			<button onClick={() => dispatch('reset')}> Reset </button>
		{/* the above Counter is independent of the Counter Below inspite of the their same behaviour */}

			<p> </p>
			<div> Count - {countTwo} </div>
			<button onClick={() => dispatchTwo('increment')}> Increment </button>
			<button onClick={() => dispatchTwo('decrement')}> Decrement </button>
			<button onClick={() => dispatchTwo('reset')}> Reset </button>
		</div>
		)

}


export default CountOne