import { useEffect, useState } from "react"

export function useLocalStorage<T>(initalState: T, key: string): [state: T, setState: React.Dispatch<React.SetStateAction<T>>] {
	const [state, setState] = useState(initalState)

	useEffect(() => {
		const item = localStorage.getItem(key)
		if (item) setState(JSON.parse(item))
	}, [])

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state))
	}, [state])

	return [state, setState]
}
