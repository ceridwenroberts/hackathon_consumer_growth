import { ReactNode } from "react"

type HeaderProps = {
	logo: ReactNode
	children?: ReactNode
	actions?: ReactNode
	className?: string
}

export function Header({ logo, children, actions, className }: HeaderProps) {
	return (
		<header
			className={`
        w-full border-b border-border bg-white
        ${className ?? ""}
      `}
		>
			<div className='mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8'>
				<div className='shrink-0'>{logo}</div>

				{children && <nav className='flex items-center gap-4'>{children}</nav>}

				{actions && <div className='flex items-center gap-2'>{actions}</div>}
			</div>
		</header>
	)
}


/*Usage
<Header
  logo={<a href="/">MyApp</a>}
  actions={<Button variant="primary">Sign up</Button>}
>
  <Link href="/features">Features</a>
  <Link href="/about">About</a>
</Header>

*/