import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { StepIndicator } from "@/components/prototype/StepIndicator"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Progress } from "@/components/ui/Progress"
import { Select } from "@/components/ui/Select"
import { Spinner } from "@/components/ui/Spinner"
import { Textarea } from "@/components/ui/Textarea"

const MockHome = () => {
	return (
		<>
	
	
			<Container>
				<Section
					title='(Section) Dashboard'
					description='Everything you need at a glance.'
				>
					<div className='grid gap-6 md:grid-cols-2'>
						<Card>(Card) Your dashboard content goes here</Card>
						{/* Badge */}
						<Card>
							<h3 className='mb-4 font-semibold'>Status badges</h3>

							<div className='flex flex-wrap gap-2'>
								<Badge>Default</Badge>
								<Badge variant='success'>Completed</Badge>
								<Badge variant='warning'>In progress</Badge>
								<Badge variant='error'>Overdue</Badge>
							</div>
						</Card>
						{/* Progress */}
						<Card>
							<h3 className='mb-4 font-semibold'>Project progress</h3>

							<Progress value={65} label='Tasks completed' showValue />
						</Card>
						{/* Select */}
						<Card>
							<h3 className='mb-4 font-semibold'>Choose a category</h3>

							<Select label='Category' defaultValue=''>
								<option value='' disabled>
									Select a category
								</option>
								<option value='design'>Design</option>
								<option value='development'>Development</option>
								<option value='marketing'>Marketing</option>
							</Select>
						</Card>
						{/* Spinner */}
						<Card>
							<h3 className='mb-4 font-semibold'>Loading states</h3>

							<div className='flex items-center gap-4'>
								<Spinner size='sm' />
								<Spinner size='md' />
								<Spinner size='lg' />
								<span className='text-sm text-gray-500'>Loading...</span>
							</div>
						</Card>
						{/* Input */}
						<Card>
							<h3 className='mb-4 font-semibold'>Text input</h3>

							<Input
								id='project-name'
								label='Project name'
								placeholder='Enter a project name'
							/>
						</Card>
						{/* Textarea */}
						<Card>
							<h3 className='mb-4 font-semibold'>Description</h3>

							<Textarea
								id='description'
								label='Project description'
								placeholder='Describe your project...'
								rows={4}
							/>
						</Card>
						{/*Stepindicator*/}
						<Card>
							<h3 className='mb-4 font-semibold'>Step indicator</h3>
							<StepIndicator
								current={2}
								total={4}
								labels={["Account", "Profile", "Preferences", "Complete"]}
							/>
						</Card>
					</div>

					{/* Buttons */}
					<Section title='Buttons' description='Available button variants.'>
						<div className='flex flex-wrap gap-3'>
							<Button variant='primary'>Primary</Button>
							<Button variant='secondary'>Secondary</Button>
							<Button variant='ghost'>Ghost</Button>
							<Button variant='primary' disabled>
								Disabled
							</Button>
						</div>
					</Section>
				</Section>
			</Container>
		</>
	)
}

export default MockHome
