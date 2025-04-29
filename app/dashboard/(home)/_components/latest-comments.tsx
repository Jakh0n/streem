import UserAvatar from '@/components/shared/user-avatar'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const LatestComments = () => {
	return (
		<>
			<div className='p-4 border rounded-xl '>
				<h2 className='text-lg font-semibold font-space-grotesk'>
					Latest Comments
				</h2>
				<p className='text-sm text-muted-foreground'>Channel Comments</p>
				<Separator className='my-2' />
				<div className='flex w-full items-center space-x-2'>
					<UserAvatar
						username='Jakhon Yokubov'
						avatar='https://github.com/shadcn.png'
					/>
					<div className='flex flex-col flex-1 '>
						<div className='flex items-center space-x-1'>
							<p className='text-xs text-muted-foreground'>@jakhon0518</p>
							<div className='rounded-full bg-muted-foreground w-1 h-1' />
							<p className='text-xs text-muted-foreground'>3 days ago</p>
						</div>
						<p className='text-xs text-muted-foreground line-clamp-2 '>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							quos.
						</p>
					</div>
					<div className=' flex items-center justify-center'>
						<Image
							src='https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju'
							alt='Latest video'
							width={94}
							height={54}
							className='rounded-lg '
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default LatestComments
