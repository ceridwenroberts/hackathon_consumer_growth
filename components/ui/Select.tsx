import { ComponentProps } from "react"

type SelectProps = ComponentProps<"select"> & {
	label?: string
	error?: string
}

/*Usage

Basic
<Select
  id="category"
  name="category"
  label="Category"
  defaultValue=""
  required
>
  <option value="" disabled>
    Choose a category
  </option>
  <option value="design">Design</option>
  <option value="development">Development</option>
  <option value="marketing">Marketing</option>
</Select>


With State
const [category, setCategory] = useState("")

<Select
  id="category"
  label="Category"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="">Choose a category</option>
  <option value="design">Design</option>
  <option value="development">Development</option>
</Select>

*/

export function Select({
	id,
	label,
	className,
	error,
	children,
	...props
}: SelectProps) {
	return (
		<div className='space-y-1.5'>
			{label && (
				<label htmlFor={id} className='block text-sm font-medium'>
					{label}
				</label>
			)}

			<select
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
          focus:border-primary
          focus:ring-2
          focus:ring-primary/20
          disabled:cursor-not-allowed
          disabled:opacity-50
          ${className ?? ""}
        `}
				{...props}
			>
				{children}
			</select>

			{error && <p className='text-sm text-error'>{error}</p>}
		</div>
	)
}
