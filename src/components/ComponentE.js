import React, {useContext} from 'react'

import {UserContext, ChannelContext} from '../App'
// we must import the context variables from app.js

function ComponentE(){
	const user = useContext(UserContext)
	const channel = useContext(ChannelContext)
	// the above enables the import context variables values to be consumed in this function

	return (
		<div> 
			{user} is a {channel}! 
			<p> Yes of Course </p>
		</div>
		)

}

export default ComponentE