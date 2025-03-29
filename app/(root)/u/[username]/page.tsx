import { getUserByUsername } from '@/actions/user.action'
import UserAvatar from '@/components/shared/user-avatar'
import { Button } from '@/components/ui/button'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import SubscribeBtn from '../../_components/subscribe-btn'
import UserContent from '../_components/user-content'

interface UsernamePageProps {
	params: Promise<{ username: string }>
}

const UserNamePage = async ({ params }: UsernamePageProps) => {
	const { username } = await params
	const repsonse = await getUserByUsername(username)
	const user = repsonse?.data?.user
	const self = await currentUser()

	if (!user) {
		return <div>User not found</div>
	}

	return (
		<>
			<div className='w-full h-40 md:h-50 lg:h-72 rounded-xl relative bg-secondary flex items-center justify-center'>
				<h1 className='font-space_grotesk text-xl lg:text-2xl capitalize font-bold'>
					Banner Image
				</h1>
			</div>

			<div className='w-full lg:w-1/2 mt-4'>
				<div className='flex items-start space-x-4'>
					<UserAvatar
						username={user.username}
						avatar={user.avatar}
						size={'xl'}
					/>

					<div className='flex flex-col space-y-0'>
						<h2 className='font-space_grotesk text-xl lg:text-2xl font-bold'>
							{user.fullName || 'No name provided'}
						</h2>

						<div className='flex items-center gap-x-1 lg:gap-x-2'>
							<p className='text-sm lg:text-base'>@{user.username}</p>
							<div className='size-1  rounded-full bg-muted-foreground' />
							<p className='text-muted-foreground text-sm lg:text-base'>
								12 subscribers
							</p>
							<div className='size-1 rounded-full bg-muted-foreground' />
							<p className='text-muted-foreground text-sm lg:text-base'>
								10 videos
							</p>
						</div>

						<p className='line-clamp-2 leading-4 text-sm lg:text-base text-muted-foreground'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Reiciendis, nobis, provident beatae omnis recusandae iusto quia
							nisi cum exercitationem enim vel rem ipsam illum ex nihil! Illum
							tempora sequi a.
						</p>

						{self && user && self.username === user.username ? (
							<div className='flex items-center space-x-3'>
								<Button
									variant={'outline'}
									size={'sm'}
									className='rounded-full mt-4 '
									asChild
								>
									<Link href={'/dashboard/settings'}>
										<h1 className='text-sm lg:text-base'>Customize channel</h1>
									</Link>
								</Button>
								<Button
									variant={'secondary'}
									size={'sm'}
									className='rounded-full mt-4 '
									asChild
								>
									<Link href={'/dashboard/videos'}>
										<h1 className='text-sm lg:text-base'>Manage videos</h1>
									</Link>
								</Button>
							</div>
						) : (
							<div>
								<SubscribeBtn isFollowing={false} />
							</div>
						)}
					</div>
				</div>
			</div>

			<UserContent />
		</>
	)
}

export default UserNamePage
