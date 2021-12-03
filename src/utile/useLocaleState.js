import React from "react"

export default function useLocalState(defaultValue, key) {
	const [value, setValue] = React.useState(() => {
		const stickyValue = window.localStorage.getItem(key)

		return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
	})

	const deleteValue = () => {
		window.localStorage.removeItem(key)
		setValue(defaultValue);
	}
	
	React.useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])
	return [value, setValue, deleteValue ]
}
