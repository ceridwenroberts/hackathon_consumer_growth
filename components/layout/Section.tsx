import { ReactNode } from "react"

type SectionProps = {
	children: ReactNode
	title?: string
	description?: string
	className?: string
	id?: string
}

/* 
For vertical spacing & section headings (optional) */
export function Section({
	children,
	title,
	description,
	className,
	id,
}: SectionProps) {
	return (
		<section id={id} className={`py-8 sm:py-12 ${className ?? ""}`}>
			{(title || description) && (
				<div className='mb-6 space-y-2'>
					{title && <h2 className='text-2xl font-semibold'>{title}</h2>}

					{description && (
						<p className='text-sm text-muted-foreground'>{description}</p>
					)}
				</div>
			)}

			{children}
		</section>
	)
}
