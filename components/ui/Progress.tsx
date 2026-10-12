type ProgressProps = {
	value: number
	label?: string
	showValue?: boolean
}


/*Usage
Basic
<Progress value={65} />

With label & percentage
<div className="space-y-4">
  <h2 className="text-lg font-semibold">Your progress</h2>
  <Progress value={3 / 5 * 100} label="Steps completed" showValue />
</div>

Inside card of modal

<div className="space-y-4">

  <h2 className="text-lg font-semibold">Your progress</h2>
  <Progress value={3 / 5 * 100} label="Steps completed" showValue />
</div>



*/

export function Progress({ value, label, showValue = false }: ProgressProps) {
	const progress = Math.min(100, Math.max(0, value))

	return (
		<div className='w-full space-y-1.5'>
			{(label || showValue) && (
				<div className='flex items-center justify-between text-sm'>
					{label && <span>{label}</span>}
					{showValue && <span>{progress}%</span>}
				</div>
			)}

			<div
				role='progressbar'
				aria-label={label ?? "Progress"}
				aria-valuenow={progress}
				aria-valuemin={0}
				aria-valuemax={100}
				className='h-2 w-full overflow-hidden rounded-full bg-gray-200'
			>
				<div
					className='h-full rounded-full bg-teal-500 transition-all duration-300'
					style={{ width: `${progress}%` }}
				/>
			</div>
		</div>
	)
}
