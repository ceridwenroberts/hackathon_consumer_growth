"use client"

import LogInForm from "@/components/forms/LogInForm"
import { useRouter } from "next/navigation"

export default function LogInPageContent() {
	const router = useRouter()

	return (
		<main className='mx-auto max-w-md p-6'>
			<h1 className='mb-4 text-2xl font-semibold'>Log in</h1>
			{/* <LogInForm onSuccess={() => router.push("/")} /> */}
			<LogInForm
				onSuccess={() => {
					console.log("Redirect callback called")
					router.push("/")
				}}
			/>
		</main>
	)
}
