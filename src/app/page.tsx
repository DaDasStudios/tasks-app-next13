import TasksList from "@/components/TasksList"
import Link from "next/link"

export default function HomePage() {
	return (
		<main className="bg-gray-800 min-h-screen pt-[100px]">
			<div className="w-3/4 mx-auto bg-gray-700 px-6 py-4 rounded max-h-[600px]">
				<div className="flex justify-between mb-4">
					<h1 className="text-4xl font-medium text-slate-200">Tasks</h1>
					<Link
						href="/new"
						tabIndex={0}
						className="text-center bg-blue-500 hover:bg-blue-600 text-blue-100 py-2 px-4 rounded font-medium"
					>
						New +
					</Link>
				</div>
				<TasksList></TasksList>
			</div>
		</main>
	)
}
