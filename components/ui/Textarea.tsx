import { ComponentProps } from "react"

type TextareaProps = ComponentProps<"textarea"> & {
	label?: string
	error?: string
}

export function Textarea({
	id,
	label,
	className,
	error,
	...props
}: TextareaProps) {
	return (
		<div className='space-y-1.5'>
			{label && (
				<label htmlFor={id} className='block text-sm font-medium'>
					{label}
				</label>
			)}

			<textarea
				id={id}
				aria-invalid={!!error}
				className={`
          w-full rounded-md
          border border-border
          bg-white
          px-3 py-2
          text-sm
          outline-none
          transition
          placeholder:text-muted-foreground
          focus:border-primary
          focus:ring-2
          focus:ring-primary/20
          disabled:cursor-not-allowed
          disabled:opacity-50
          ${className ?? ""}
        `}
				{...props}
			/>

			{error && <p className='text-sm text-error'>{error}</p>}
		</div>
	)
}
