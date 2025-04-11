import { getHomeFeed } from '@/actions/feed.action'
import { EyeIcon, HeartIcon, MessageCircleIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const RecommendedVideos = async () => {
	const response = await getHomeFeed()
	const videos = response?.feed || []
	return (
		<div>
			<h2 className='font-semibold text-md mb-4'>Recommended</h2>
			<div className='flex flex-col space-y-2'>
				{videos.map(video => (
					<Link
						href={`/v/${video.id}`}
						key={video.id}
						className='flex items-center gap-2'
					>
						<Image
							src={video.thumbnail}
							alt={video.title}
							width={98}
							height={54}
							className='rounded-md'
						/>
						<div className='flex items-start flex-col space-y-1'>
							<p className='text-sm line-clamp-1 font-semibold'>
								{video.title}
							</p>
							<div className='flex items-center space-x-2'>
								<p className='text-xs text-muted-foreground flex items-center gap-1'>
									<EyeIcon className='w-4 h-4' />
									<span>23</span>
								</p>
								<p className='text-xs text-muted-foreground flex items-center gap-1'>
									<MessageCircleIcon className='w-4 h-4' />
									<span>23</span>
								</p>
								<p className='text-xs text-muted-foreground flex items-center gap-1'>
									<HeartIcon className='w-4 h-4' />
									<span>23</span>
								</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default RecommendedVideos
