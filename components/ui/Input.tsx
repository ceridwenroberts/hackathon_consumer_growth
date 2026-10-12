import { ComponentProps } from "react"

type InputProps = ComponentProps<"input"> & {
	label?: string
	error?: string
}

{
	/* 
Usage

OBS. Add Badges?

<Input
  id="email"
  label="Email address"
  type="email"
  placeholder="you@example.com"
  error={errorMessage}
/>
*/
}

export function Input({ id, label, className, error, ...props }: InputProps) {
	return (
		<div className='space-y-1.5'>
			{label && (
				<label htmlFor={id} className='block text-sm font-medium'>
					{label}
				</label>
			)}
			<input
				id={id}
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
          ${className ?? ""} 
          `}
				{...props}
			/>

			{
				error && <p className='text-sm text-error'>{error}</p> //Add badge?
			}
		</div>
	)
}
