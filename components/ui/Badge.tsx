type BadgeProps = {
	children: React.ReactNode
	variant?: "default" | "success" | "warning" | "error"
}

/* 
Usage 
Labels for status, categories, counts etc
Style by variant

<Badge>New</Badge>

<Badge variant="success">
  Completed
</Badge>

<Badge variant="warning">
  Pending
</Badge>*/



export function Badge({ children, variant = "default" }: BadgeProps) {
	const styles = {
		default: "bg-muted text-muted-foreground",
		success: "bg-green-100 text-success",
		warning: "bg-yellow-100 text-warning",
		error: "bg-red-100 text-error",
	}

	return (
		<span
			className={`
        inline-flex items-center
        rounded-full
        px-2.5 py-1
        text-xs font-medium
        ${styles[variant]}
      `}
		>
			{children}
		</span>
	)
}
