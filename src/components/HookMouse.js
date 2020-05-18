import React, { useState, useEffect } from 'react'

function HookMouse() {

	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = (e) => {
		console.log('mouse moved')
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log('useEffect called')

		window.addEventListener('mousemove', logMousePosition)


		return () => {
			console.log('Component unmounting code')
			window.removeEventListener('mousemove', logMousePosition)
		}
	}, [])

	return (
		<div>
			Position X - {x} and Position Y- {y}
		</div>
		)
}

export default HookMouse