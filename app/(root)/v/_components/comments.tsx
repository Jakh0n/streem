import { getComments } from '@/actions/video.action'
import UserAvatar from '@/components/shared/user-avatar'
import { Separator } from '@/components/ui/separator'
import PostComment from './post-comment'

const Comments = async () => {
	const response = await getComments()
	const comments = response?.data?.comments || []
	return (
		<div className='pb-8'>
			<h1 className='text-md font-semibold leading-none mb-4'>Comments</h1>
			<PostComment />
			<Separator className='my-4' />
			<div className='flex items-start flex-col space-y-3 mt-4'>
				{comments &&
					comments.map(comment => (
						<div key={comment.id} className='flex items-start gap-2 '>
							<UserAvatar
								username={comment.user.username}
								avatar={comment.user.avatar}
							/>
							<div className='flex items-start flex-col gap-2'>
								<div className='flex items-center space-x-2'>
									<p className='text-sm font-semibold text-muted-foreground '>
										@{comment.user.username}
									</p>
									<p className='text-sm  text-muted-foreground'>
										{comment.createdAt.toLocaleDateString()}
									</p>
								</div>
								<p className='text-sm'>{comment.content}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	)
}

export default Comments
