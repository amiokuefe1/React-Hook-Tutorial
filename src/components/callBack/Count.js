import React from 'react'

function Count({text, count}) {
	console.log('Rendering Count')
	// the Count function parameters are props i.e. the values we are expecting will be provided from another component to which this Count function will be exported to
	return(
		<div>
			{text} - {count}
		</div>
		)
}

export default React.memo(Count)
// React.memo will prevent this function from re-rendering alongside other components if it's state is unchanged