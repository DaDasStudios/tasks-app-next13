import { useTasksContext } from "@/context/Tasks"
import { ITask } from "@/interfaces/tasks"
import Link from "next/link"
import { toast } from "react-hot-toast"

export default function TaskCard({ task }: { task: ITask }) {
	const { deleteTask } = useTasksContext()

	function handleDelete() {
		if (window.confirm("Are your sure to delete this task?")) {
			deleteTask(task.id)
			toast.success("Task deleted")
		}
	}

	return (
		<div className="flex items-center ">
			<div className="grow">
				<h3 className={`font-medium text-lg text-gray-200 ${task.done && "line-through"}`}>{task.title}</h3>
				<p className={`text-gray-300 ${task.done && "line-through"}`}>{task.description}</p>
			</div>
			<div className="ml-6 flex gap-x-3 text-white font-medium">
				<button
					type="button"
					onClick={handleDelete}
					className="bg-red-500 hover:bg-red-500/80 text-red-100 p-2 rounded text-lg grow focus:outline-red-500 focus:ring-2 focus:ring-red-700/50 outline-none text-center"
				>
					Delete
				</button>
				<Link
					href={`/edit/${task.id}`}
					tabIndex={0}
					className="bg-blue-500 hover:bg-blue-500/80 text-blue-50 p-2 rounded text-lg grow focus:outline-blue-500 focus:ring-2 focus:ring-blue-700/50 outline-none"
				>
					Edit
				</Link>
			</div>
		</div>
	)
}
