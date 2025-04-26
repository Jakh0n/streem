import UserInformation from '../../v/_components/user-information'

const StreamPage = () => {
	return (
		<div className='grid grid-cols-4 gap-4'>
			<div className='col-span-3 space-y-4'>
				<div className='aspect-video rounded-md bg-secondary'></div>
				<h1 className='text-2xl font-semibold font-space_grotesk leading-none line-clamp-2 '>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
					quos.
				</h1>
				<div className='flex items-center justify-between'>
					<UserInformation />
				</div>
			</div>
			<div className='col-span-1'>
				<div className='w-full bg-secondary rounded-md h-full'></div>
			</div>
		</div>
	)
}

export default StreamPage
