"use client"

import { Button } from "@/components/ui/Button"
import { getLoggedInUser, logOutUser } from "@/lib/mockDb"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function AccountActions() {
	const router = useRouter()
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setIsLoggedIn(!!getLoggedInUser())
		//TODO : Create Context
	}, [])

	const handleLogOut = () => {
		logOutUser()
		setIsLoggedIn(false)
		router.push("/")
		router.refresh()
	}

	if (isLoggedIn) {
		return (
			<Button variant='ghost' onClick={handleLogOut}>
				Log out
			</Button>
		)
	}

	return (
		<>
			<Button variant='ghost' href='/log-in'>
				Log in
			</Button>
			<Button variant='primary' href='/sign-up'>
				Sign up
			</Button>
		</>
	)
}
