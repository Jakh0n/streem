import UserAvatar from '@/components/shared/user-avatar'

const Subscribers = () => {
	return (
		<>
			<div className='p-4 border rounded-xl space-y-4'>
				<h2 className='text-lg font-semibold font-space-grotesk'>
					Recent Subscribers
				</h2>
				<div className='flex items-center gap-2'>
					<UserAvatar
						username='Jakhon Yokubov'
						avatar='https://github.com/shadcn.png'
					/>
					<div className='flex flex-col space-y-1'>
						<p className='text-sm font-semibold'>Jakhon Yokubov</p>
						<p className='text-xs text-muted-foreground'>23 followers</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Subscribers
