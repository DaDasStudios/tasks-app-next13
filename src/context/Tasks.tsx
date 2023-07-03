"use client"

import { ITask } from "@/interfaces/tasks"
import { createContext, PropsWithChildren, useContext, useState, useEffect } from "react"
import { tasks as initTasks } from "@/data/tasks"
import { useParams } from "next/navigation"
import { useLocalStorage } from "@/app/hooks/useLocalStorage"

interface TasksContext {
	tasks: ITask[]
	createOrEditTask(title: string, description: string): void
	deleteTask(id: string): void
}

const context = createContext({} as TasksContext)

export const useTasksContext = () => useContext(context)

export const TasksProvider = ({ children }: PropsWithChildren) => {
	const [tasks, setTasks] = useLocalStorage<ITask[]>([], "tasks")

	const params = useParams()
	const isEdit = Boolean(params.id)

	return (
		<context.Provider
			value={{
				tasks,
				createOrEditTask(title, description) {
					if (isEdit) {
						setTasks((prevTasks) => prevTasks.map((task) => (task.id === params.id ? { ...task, title, description } : task)))
					} else {
						setTasks((prevTasks) => [...prevTasks, { id: crypto.randomUUID(), title, description, done: false }])
					}
				},
				deleteTask(id) {
					setTasks((prevTasks) => prevTasks.filter((task) => task.id != id))
				},
			}}
		>
			{children}
		</context.Provider>
	)
}
