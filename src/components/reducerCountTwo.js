import React, {useReducer} from 'react'

const initialState = {
	firstCounter: 0,
	secondCounter: 10
}
// when initialState datatype is an object(hold more key-value pairs) and not a single value

const reducer = (state, action) => {
	switch(action.type) {
		//action.type corresponds to case titles(e.g. increment) when it's called in the button dispatch function
		case 'increment':
		 return { ...state, firstCounter: state.firstCounter + action.value} 
		 //when we want the increment value to be dynamically controlled from the dispatch function button click event so we add action.value
		case 'decrement':
		 return{ ...state, firstCounter: state.firstCounter - action.value}
		 // to ensure both counter values display individually and simultaneously we add the spread operator i.e. '...state'
		case 'increment':
		 return{ ...state, firstCounter: state.firstCounter + action.value}
		case 'decrement':
		 return{ ...state, firstCounter: state.firstCounter - action.value}
		case 'increment2':
		 return{ ...state, secondCounter: state.secondCounter + action.value}
		case 'decrement2':
		 return{ ...state, secondCounter: state.secondCounter - action.value}
		case 'reset':
		 return initialState
		 // automically returns the count value to zero upon dispatch function button click event
		default: 
		 return state
	}
}

function CountTwo() {
	const [count, dispatch] = useReducer(reducer, initialState)
	// the above works by destructuring i.e. for the reducer function all the buttons must follow the switch cases orderly to get the desire action in sequence of case appearances

	return(
		<div>
			<div> Count - {count.firstCounter} </div>
			<div> Count - {count.secondCounter} </div>
			<button onClick={() => dispatch({type: 'increment', value:2})}> Increment </button>
			<button onClick={() => dispatch({type: 'decrement', value:2})}> Decrement </button>
		{/*the above onClick dispatch action is controlled by destructuring the reducer function */}
			
			<p> </p>
			<button onClick={() => dispatch({type: 'increment', value:5})}> Increment </button>
			<button onClick={() => dispatch({type: 'decrement', value:5})}> Decrement </button>
			
			<p> </p>
			<button onClick={() => dispatch({type: 'increment2', value:10})}> Increment </button>
			<button onClick={() => dispatch({type: 'decrement2', value:10})}> Decrement </button>
		{/*the above type will tally with action.type in the switch case block to ensure the action does not interfere with firstCounter */}

			<p> </p>
			<button onClick={() => dispatch({type: 'reset'})}> Reset </button>


		</div>
		)
}


export default CountTwo