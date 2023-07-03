import "./globals.css"
import { Inter } from "next/font/google"
import { TasksProvider } from "@/context/Tasks"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Tasks App",
	description: "Learning main new concepts of NextJS 13",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<TasksProvider>
				<body className={inter.className}>
					<Toaster />
					{children}
				</body>
			</TasksProvider>
		</html>
	)
}
