import React from 'react'

function Title() {
	console.log('Rendering Title')

	return(
		<div>
			Diamond's tryout
		</div>
		)
}

export default React.memo(Title)
// React.memo will prevent this function from re-rendering alongside other components if it's state is unchanged