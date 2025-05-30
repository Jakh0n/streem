import UserAvatar from '@/components/shared/user-avatar'
import { Button } from '@/components/ui/button'
import { BadgeCheck } from 'lucide-react'
import Link from 'next/link'
import SubscribeBtn from '../../_components/subscribe-btn'

const UserInformation = () => {
	return (
		<Link href={'/u/samarbadriddin0v'} className='flex items-center gap-x-2'>
			<UserAvatar
				avatar='https://avatars.githubusercontent.com/u/77564507?v=4'
				username='jakhon yokubov'
				size={'lg'}
			/>

			<div className='flex flex-col space-y-0'>
				<div className='flex items-center gap-x-1'>
					<h2 className='font-bold text-lg font-space_grotesk'>
						Jakhon Yokubov
					</h2>
					<Button
						variant={'ghost'}
						size={'icon'}
						className='rounded-full size-7'
					>
						<BadgeCheck className='text-blue-500' />
					</Button>
				</div>
				<p className='text-sm text-muted-foreground'>23 subscribers</p>
			</div>
			<SubscribeBtn isFollowing />
		</Link>
	)
}

export default UserInformation
