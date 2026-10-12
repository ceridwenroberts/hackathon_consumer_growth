import { ComponentProps } from "react"

type CardProps = ComponentProps<"div"> & {
	padding?: "sm" | "md" | "lg"
}

const paddingStyles = {
	sm: "p-3",
	md: "p-5",
	lg: "p-8",
}

export function Card({
	padding = "md",
	className,
	children,
	...props
}: CardProps) {
	return (
		<div
			className={`
        rounded-xl border border-border
        bg-white shadow-sm
        ${paddingStyles[padding]}
        ${className ?? ""}
      `}
			{...props}
		>
			{children}
		</div>
	)
}
