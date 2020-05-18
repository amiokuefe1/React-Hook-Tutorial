import React, {useState} from 'react'

function HookCounterThree() {

	const [name, setName] = useState({firstName:'', lastName:''})


	return (
		<div>
		 	<form>
		 		<input type="text" value={name.firstName} 
		 		  onChange={e => setName({ ...name, firstName: e.target.value })}/>
		 		
		 		<input type="text" value={name.lastName} 
		 		  onChange={e => setName({ ...name, lastName: e.target.value })}/>

		 		  {/*... the spread operator in this context creates a duplicate of the name object preserving that formal state and updates the object property that comes after it like the case above
		 		   */}
		 	</form>
		 	<h2>Your first name is: {name.firstName}  </h2> 
		 	<h2>Your last name is: {name.lastName}  </h2> 
		</div>
		)
}

export default HookCounterThree