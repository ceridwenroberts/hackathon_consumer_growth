import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ReactNode } from "react"

export default function MockLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header
				logo={<Link href='/'>MyApp</Link>}
				actions={
					<>
						<Button href='/sign-up' variant='primary'>
							Sign up
						</Button>
						<Button href='/log-in' variant='primary'>
							Log in
						</Button>
					</>
				}
			>
				<Link href='/features'>Features</Link>
			</Header>

			{children}
		</>
	)
}
