import Link from "next/link"
import { ComponentProps } from "react"

type ButtonProps = {
	variant?: "primary" | "secondary" | "ghost"
	href?: string
} & Omit<ComponentProps<"button">, "className"> & {
		className?: string
	}

export function Button({
	variant = "primary",
	href,
	className,
	children,
	...props
}: ButtonProps) {
	const styles = {
		primary: "bg-primary text-primary-foreground hover:opacity-90",
		secondary: "bg-secondary text-secondary-foreground hover:bg-muted",
		ghost: "text-foreground hover:bg-muted",
	}

	const classes = `
    inline-flex items-center justify-center
    rounded-md px-4 py-2
    text-sm font-medium transition
    ${styles[variant]}
    ${className ?? ""}
  `

	if (href) {
		return (
			<Link href={href} className={classes}>
				{children}
			</Link>
		)
	}

	return (
		<button className={classes} {...props}>
			{children}
		</button>
	)
}
