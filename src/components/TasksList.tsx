"use client"

import { useTasksContext } from "@/context/Tasks"
import TaskCard from "./TaskCard"

export default function TasksList() {
	const { tasks } = useTasksContext()

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6">
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</div>
	)
}
