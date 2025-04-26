import { getHomeFeed } from '@/actions/feed.action'
import { Skeleton } from '@/components/ui/skeleton'
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
export const RecommendedVideosSkeleton = () => {
	return (
		<>
			<h2 className='font-space_grotesk text-2xl'>Recommended</h2>

			{Array.from({ length: 3 }).map((_, index) => (
				<div key={index} className='flex flex-col space-y-2 mt-4'>
					<div className='flex gap-x-2'>
						<Skeleton className='rounded-md w-[96px] h-[54px]' />

						<div className='flex flex-col space-y-0 flex-1 h-full w-full'>
							<Skeleton className='w-full h-4' />

							<div className='flex gap-x-4 pt-2'>
								<Skeleton className='w-1/3 h-4' />
								<Skeleton className='w-1/3 h-4' />
								<Skeleton className='w-1/3 h-4' />
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	)
}
