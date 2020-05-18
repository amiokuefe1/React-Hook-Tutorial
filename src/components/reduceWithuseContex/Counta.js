import React, {useState, useMemo} from 'react'

function Counta() {
	const [countaOne, setCountaOne] = useState(0)
	const [countaTwo, setCountaTwo] = useState(0)

	const incrementOne = () => {
		setCountaOne(countaOne + 1)
	}

	const incrementTwo = () => {
		setCountaTwo(countaTwo + 1)
	}

	const isEven = useMemo(() =>{
		let i=0
		while (i<1000000000) i++
		return countaOne % 2 ===0
	},[countaOne])
	// the array argument prevents an infinite loop of data fetching
	// also note that isEven is no along a function because it now stores a value

	return (
		<div>
			<button onClick={incrementOne}> Count - {countaOne} </button>
			<span> {isEven ? ' Even' : ' Odd'} </span>
			<br/>
			<button onClick={incrementTwo}> Count - {countaTwo} </button>
		</div>
		)
}
export default Counta