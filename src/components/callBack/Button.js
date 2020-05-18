import React from 'react'


function Button({ handleClick, children}) {
	console.log('Rendering button -', children)
	// this Button function parameters are props i.e. the parameter values will be provide from another component
	return(
		<button onClick={handleClick}>
			{children}
		{/*children prop only means that what ever will be displayed inside button element will be provided from another component where this button component will be called or invoked */}
		</button>
		)
}

export default React.memo(Button)
// React.memo will prevent this function from re-rendering alongside other components if it's state is unchanged