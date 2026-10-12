import { User } from "@/types"

const USERS_KEY = "all-users"
const LOGGED_IN_USER_KEY = "current_user"



export function getUsers(): User[] {
	if (typeof window === "undefined") return []

	const users = localStorage.getItem(USERS_KEY)
	return users ? (JSON.parse(users) as User[]) : []
}
export function createUser(user: User): void {
	const existingUsers = getUsers()
	if (existingUsers.some((existingUser) => existingUser.email === user.email)) {
		throw new Error("A user with this email already exists")
	}
	try {
		const users = getUsers()
		users.push(user)
		localStorage.setItem(USERS_KEY, JSON.stringify(users))
	} catch {
		throw new Error("Falied to sign up. Please try again")
	}
}

export const getLoggedInUser = () => {
	const loggedInUser = localStorage.getItem(LOGGED_IN_USER_KEY)
	return loggedInUser ? (JSON.parse(loggedInUser) as User) : null
}

export const loginUser = (user: User): void => {
	const regUsers = getUsers()
	const matchedUser = regUsers.find(
		(regUser) => regUser.username === user.username,
	)
	if (!matchedUser) throw new Error("Username does not exist")

	if (matchedUser.password !== user.password)
		throw new Error("Incorrect password")
	localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(matchedUser))
}

export const logOutUser = (): void => {
	localStorage.removeItem(LOGGED_IN_USER_KEY)

}
