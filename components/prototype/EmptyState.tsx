import { ReactNode } from "react"

type EmptyStateProps = {
	title: string
	description?: string
	action?: ReactNode
	image?: ReactNode
}

/* Usage
Pass action and images as components in props 
Put image in public/images/ (only /images/filename as route required)

<EmptyState title="This is an empty state page"
 description="It shows a no "projects yet" page/empty mailbox etc" 
 image={
 <Image
 src="/images/projects-empty.svg"
 alt="" //no alt when pure embellishment
 width={160}
 height= {160}
action={<Button href="/projects/new>Create Project</Button>
*/

export default function EmptyState({
	title,
	description,
	action,
	image,
}: EmptyStateProps) {
	return (
		<>
			{image}
			<div className='flex fles-col items-center justify-center gap-3 rounded-xl border border-dashed p-8 text-center'>
				<h2 className='text-lg font-semibold'>{title}</h2>
				{description && <p className='max-w-sm text-sm'>{description}</p>}
				{action}
			</div>
		</>
	)
}
