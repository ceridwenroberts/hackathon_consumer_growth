type StepIndicatorProps = {
	current: number
	total: number
	labels?: string[]
}

export function StepIndicator({ current, total, labels }: StepIndicatorProps) {
	return (
		<div className='w-full'>
			<div className='mb-3 flex items-center justify-between text-sm'>
				<span className='font-medium'>
					{labels?.[current - 1] ?? `Step ${current}`}
				</span>
				<span className='text-muted-foreground'>
					{current} of {total}
				</span>
			</div>

			<div className='flex gap-2' aria-label={`Step ${current} of ${total}`}>
				{Array.from({ length: total }, (_, index) => {
					const step = index + 1
					const isCompleted = step < current
					const isCurrent = step === current

					return (
						<div
							key={step}
							className={`h-2 flex-1 rounded-full ${
								isCompleted || isCurrent ?   "bg-teal-400"
    : "bg-teal-100"
							}`}
							aria-current={isCurrent ? "step" : undefined}
						/>
					)
				})}
			</div>
		</div>
	)
}
