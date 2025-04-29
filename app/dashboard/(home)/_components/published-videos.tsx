import { Button } from '@/components/ui/button'
import { ArrowRight, EyeIcon, HeartIcon, MessageCircleIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const PublishedVideos = () => {
	return (
		<>
			<div className='p-4 border rounded-xl space-y-4'>
				<div className='flex items-center gap-2'>
					<Image
						src={
							'https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju'
						}
						alt='Latest video'
						width={94}
						height={54}
						className='rounded-lg '
					/>

					<div className='flex flex-col flex-1'>
						<h1 className='text-sm font-semibold font-space-grotesk line-clamp-2'>
							The football match Olypic 2025 in paris is going to start
						</h1>
						<div className='flex items-center space-x-2 mt-2'>
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
				</div>
				<Button className='w-fit rounded-full' variant='outline' asChild>
					<Link href={`/dashboard/videos/${'video.id'}`}>
						<span className='text-sm'>Go to videos</span>
						<ArrowRight className='size-4 animate-pulse' />
					</Link>
				</Button>
			</div>
		</>
	)
}

export default PublishedVideos
