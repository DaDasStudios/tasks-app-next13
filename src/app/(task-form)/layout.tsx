"use client"

import Input from "@/components/Input"
import { useTasksContext } from "@/context/Tasks"
import { useRouter, useParams } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from "react-hot-toast"

interface FormData {
	title: string
	description: string
}

export default function FormLayout() {
	const { tasks, createOrEditTask } = useTasksContext()
	const router = useRouter()
	const params = useParams()

	const isEdit = Boolean(params.id)
	const currTask = tasks.find((t) => t.id === params.id)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			title: currTask?.title || "",
			description: currTask?.description || "",
		},
	})

	const onSubmit: SubmitHandler<FormData> = (data) => {
		createOrEditTask(data.title, data.description)
		toast.success(isEdit ? "Task edited" : "New task added")
		router.push("/")
	}

	return (
		<main className="min-h-screen flex items-center justify-center bg-gray-800">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col bg-slate-700 text-gray-300 p-6 rounded font-medium"
			>
				<h1 className="text-center mb-4 text-2xl">{isEdit ? "Edit task" : "Add a new task"}</h1>
				<Input
					id="title"
					label="Title"
					placeholder="Write a title"
					error={errors.title}
					register={register}
					options={{ required: { message: "The title is required", value: true } }}
				/>

				<Input
					id="description"
					label="Description"
					placeholder="More details of the task"
					register={register}
					options={{ required: { message: "The description is required", value: true } }}
					error={errors.description}
				/>
				<div className="flex gap-x-4 mt-4">
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-500/80 text-blue-50 p-3 rounded text-lg grow focus:outline-blue-500 focus:ring-2 focus:ring-blue-700/50 outline-none"
					>
						Submit
					</button>
					<button
						type="button"
						onClick={() => router.push("/")}
						className="bg-red-500 hover:bg-red-500/80 text-red-100 p-3 rounded text-lg grow focus:outline-red-500 focus:ring-2 focus:ring-red-700/50 outline-none text-center"
					>
						Cancel
					</button>
				</div>
			</form>
		</main>
	)
}
