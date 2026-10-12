"use client"

import LogInForm from "@/components/forms/LogInForm"
import Modal from "@/components/ui/Modal"
import { useRouter } from "next/navigation"

export default function LogInModalPage() {
	const router = useRouter()

	return (
		<Modal
			isOpen={true}
			onClose={() => router.back()}
			title='Log in'
			clickAway={true}
		>
			<LogInForm onSuccess={() => router.back()} />
		</Modal>
	)
}
