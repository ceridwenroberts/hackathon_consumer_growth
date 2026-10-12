import { User } from "@/types"
import { ComponentProps, useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { createUser } from "@/lib/mockDb"

type SignupFormProps = {
	onSuccess: () => void
}
const SignupForm = ({ onSuccess }: SignupFormProps) => {

	const [user, setUser] = useState<User>({
		id: "",
		username: "",
		email: "",
		password: "",
    })
    
    useEffect(() => { console.log(user) }, [user])

	// TODO: Tyoe correctly

	const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
        e.preventDefault()
        console.log("handle go!")
        const newUser = { ...user, id: uuidv4() }
        try {
            createUser(newUser)
            onSuccess()
        } catch (error) {
            console.log(error)
        }	
	}

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
			<Input
				name='unsername'
				label='Username'
				type='text'
				placeholder='Enter Username'
				value={user.username}
				onChange={(e) =>
					setUser((prev) => ({ ...prev, username: e.target.value }))
				}
				required
				minLength={6}
			/>
			<Input
				name='email'
				label='Email'
				type='email'
				value={user.email}
				onChange={(e) =>
					setUser((prev) => ({ ...prev, email: e.target.value }))
				}
				required
				minLength={8}
			/>
			<Input
				name='password'
				label='Password'
				type='password'
				value={user.password}
				onChange={(e) =>
					setUser((prev) => ({ ...prev, password: e.target.value }))
				}
				required
				minLength={7}
			/>
			<Button type='submit' variant='secondary'>
				Sign up!
			</Button>
		</form>
	)
}

export default SignupForm
