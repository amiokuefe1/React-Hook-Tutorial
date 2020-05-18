import React, {useState, useCallback} from 'react'
// import useCallback function to make use it inside this react file

import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
	const [age, setAge] = useState(25)
	const [salary, setSalary] = useState(5000)

	const incrementAge = useCallback(() =>{
		setAge(age + 1)
	}, [age])
	// the useCallback function takes an arrow function as the first argument and the array as the second argument which contains the dependency variable to prevent an infinite loop of data fetching

	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	}, [salary])
	// the useCallback function prevents this handler from re-rendering whenever another component/handler is called to render i.e. no do akproko, just dey your lane and mind your business, dey no call you

	return(
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleClick={incrementAge} > Increment Age </Button>
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary} > Increment Salary </Button>
		</div>
		)
}

export default ParentComponent