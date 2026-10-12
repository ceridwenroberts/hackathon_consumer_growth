"use client"

import { User } from "@/types"
import { ComponentProps, useState } from "react"
import { Input } from "../ui/Input"
import { Button } from "../ui/Button"
import { loginUser } from "@/lib/mockDb"

type LogInFormProps = {
	onSuccess: () => void
}

const LogInForm = ({ onSuccess }: LogInFormProps) => {

	const [user, setUser] = useState<User>({
		id: "",
		username: "",
		email: "",
		password: "",
    })
    
    const [error, setError] = useState("")

	const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
		e.preventDefault()

		try {
			loginUser(user)
			onSuccess()
		} catch (error) {
		setError(error instanceof Error ? error.message : "Something went wrong",)
		}
	}

	return (
		<form onSubmit={handleSubmit} className='space-y-5'>
			<Input
				id='username'
				name='username'
				label='Username'
				type='text'
				placeholder='Enter your username'
				value={user.username}
				onChange={(e) =>
					setUser((prev) => ({ ...prev, username: e.target.value }))
				}
				required
			/>

			<Input
				id='password'
				name='password'
				label='Password'
				type='password'
				placeholder='Enter your password'
				value={user.password}
				onChange={(e) =>
					setUser((prev) => ({ ...prev, password: e.target.value }))
				}
				required
			/>

            <div className='pt-2'>
                               {error && (
  <p className="text-sm text-rose-900 bg-rose-50 mb-3 p-3" role="alert">
    {error}
  </p>
)}
                
				<Button type='submit' variant='primary' className='w-full'>
					Log in
				</Button>
			</div>
		</form>
	)
}

export default LogInForm

// "use client"
// import { User } from "@/types"
// import { ComponentProps, useState } from "react"
// import { Input } from "../ui/Input"
// import { Button } from "../ui/Button"
// import { loginUser } from "@/lib/mockDb"

// type LogInFormProps = {
//     onSuccess: () => void
// }
// const LogInForm = ({onSuccess}: LogInFormProps) => {
//     const [user, setUser] = useState<User>({
//         id: "",
//         username: "",
//         email: "",
//         password: ""
//     })

//     const handelSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
//         e.preventDefault()
//         try {
//             loginUser(user)
//         onSuccess()
//         } catch (error) {
//             console.log(error)
//         }
// }

// 	return (
// 		<>
// 			<form>
// 				<Input
// 					name='username'
// 					label='Username'
// 					type='text'
// 					placeholder='Enter Username'
// 					value={user.username}
// 					onChange={(e) =>
// 						setUser((prev) => ({ ...prev, username: e.target.value }))
// 					}
// 					required
// 				/>
// 				<Input
// 					name='password'
// 					label='Password'
// 					type='password'
// 					value={user.password}
// 					onChange={(e) =>
// 						setUser((prev) => ({ ...prev, password: e.target.value }))
// 					}
// 					required
//                 />
//                 <Button type='submit' variant='secondary'>
//                                 Sign up!
//                             </Button>
// 			</form>
// 		</>
// 	)
// }
// export default LogInForm
