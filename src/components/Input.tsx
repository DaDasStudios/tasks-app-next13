import { FieldValues, UseFormRegister, Path, RegisterOptions, FieldError } from 'react-hook-form'

interface Props<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
	register: UseFormRegister<T>
	label: string
	id: Path<T>
	options?: RegisterOptions
	error: FieldError | undefined
}

export default function Input<T extends FieldValues>({ register, error, options, id, label, ...props }: Props<T>) {
	console.log(error)
	return (
		<>
			<label htmlFor={id} className="mb-2">
				{label}
			</label>
			<input
				type="text"
				id={id}
				{...register(id, options)}
				className={`border  bg-transparent rounded block mb-2 p-2 focus:ring-2 outline-none ${
					error
						? "border-red-500 placeholder:text-red-500 focus:outline-red-500 focus:ring-red-600"
						: "border-gray-100/10 placeholder:text-gray-400 focus:outline-slate-500 focus:ring-slate-600"
				}`}
				{...props}
			/>
			{error && <span className="text-left font-medium text-red-500">{error.message}</span>}
			<span className="mb-4"></span>
		</>
	)
}
