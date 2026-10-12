import { ReactNode } from "react"

type ContainerProps = {
	children: ReactNode
	size?: "sm" | "md" | "lg" | "xl" | "full"
	className?: string
}

/*
Usage
For control of with and horizonal alignment. Use sizes like variants*/
const sizes = {
	sm: "max-w-2xl",
	md: "max-w-4xl",
	lg: "max-w-6xl",
	xl: "max-w-7xl",
	full: "max-w-none",
}

export function Container({
	children,
	size = "xl",
	className,
}: ContainerProps) {
	return (
		<div
			className={`
        mx-auto w-full px-4
        sm:px-6 lg:px-8
        ${sizes[size]}
        ${className ?? ""}
      `}
		>
			{children}
		</div>
	)
}
