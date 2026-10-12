type SpinnerProps = {
	size?: "sm" | "md" | "lg"
	label?: string
}

const sizes = {
	sm: "size-4 border-2",
	md: "size-6 border-2",
	lg: "size-10 border-4",
}

export function Spinner({ size = "md", label = "Loading" }: SpinnerProps) {
	return (
		<span
			role='status'
			aria-label={label}
			className={`
        inline-block animate-spin rounded-full
        border-primary border-t-transparent
        ${sizes[size]}
      `}
		/>
	)
}
