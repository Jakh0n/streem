const Description = () => {
	return (
		<div className='bg-secondary rounded-md p-4'>
			<div className='flex items-center gap-2 '>
				<p className='text-sm text-muted-foreground'>1,233 views</p>
				<div className='w-1 h-1 bg-muted-foreground rounded-full' />
				<p className='text-sm text-muted-foreground'>1 day ago</p>
			</div>
			<div className='flex flex-col space-y-0 mt-2'>
				<h1 className='text-md font-semibold font-space_grotesk leading-none '>
					Description
				</h1>
				<p className='text-sm text-muted-foreground line-clamp-2'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
					quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Quisquam, quos.
				</p>
			</div>
		</div>
	)
}

export default Description
