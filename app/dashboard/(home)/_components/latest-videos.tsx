import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, Clock, Eye, Heart, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const LatestVideos = () => {
	return (
		<>
			<div className='p-4 border rounded-xl space-y-4'>
				<h2 className='text-lg font-semibold font-space-grotesk'>
					Latest video performance
				</h2>
				<div className='w-full h-44 relative rounded-xl overflow-hidden mt-2'>
					<div className='absolute z-40 inset-0 bg-gradient-to-t from-primary rounded-lg'></div>
					<Image
						src={
							'https://img.olympics.com/images/image/private/t_16-9_640/f_auto/v1538355600/primary/owtwv8todbwx68perkjz'
						}
						alt='Latest video'
						fill
						className='object-cover rounded-lg '
					/>
					<div className='absolute bottom-0 left-0 right-0 p-2 font-space-grotesk z-50 text-primary-foreground text-lg font-bold'>
						The Olympics
					</div>
				</div>
				<p className='text-sm text-muted-foreground'>
					2 days compared to your typical performance
				</p>
				<Separator className='my-2' />
				<div className='border rounded-xl p-4 space-y-2'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-1'>
							<Clock className='size-3 ' />
							<span className='text-sm'>Created at</span>
						</div>
						<p className='text-sm  border-b border-b-secondary text-muted-foreground'>
							2 days ago
						</p>
					</div>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-1'>
							<Eye className='size-3 ' />
							<span className='text-sm'>Views</span>
						</div>
						<p className='text-sm  border-b border-b-secondary text-muted-foreground'>
							570
						</p>
					</div>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-1'>
							<MessageCircle className='size-3 ' />
							<span className='text-sm'>Messages</span>
						</div>
						<p className='text-sm  border-b border-b-secondary text-muted-foreground'>
							34
						</p>
					</div>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-1'>
							<Heart className='size-3 ' />
							<span className='text-sm'>Likes</span>
						</div>
						<p className='text-sm  border-b border-b-secondary text-muted-foreground'>
							345
						</p>
					</div>
				</div>
				<div className='flex flex-col space-y-4'>
					<Button className='w-fit rounded-full' variant='outline' asChild>
						<Link href={`/dashboard/videos/${'video.id'}`}>
							<span className='text-sm'>Go to video</span>
							<ArrowRight className='size-4 animate-pulse' />
						</Link>
					</Button>
					<Button className='w-fit rounded-full' variant='outline' asChild>
						<Link href={`/dashboard/videos/${'video.id'}`}>
							See Comments (49)
						</Link>
					</Button>
				</div>
			</div>
		</>
	)
}

export default LatestVideos
