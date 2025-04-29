import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const latestStream = () => {
	return (
		<>
			<div className='p-4 rounded-xl border space-y-4'>
				<h2 className='text-lg font-semibold font-space-grotesk'>
					Latest stream
				</h2>
				<div className='w-full h-44 relative rounded-xl overflow-hidden mt-2'>
					<div className='absolute z-40 inset-0 bg-gradient-to-t from-primary rounded-lg'></div>
					<Image
						src={
							'https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju'
						}
						alt='Latest video'
						fill
						className='object-cover rounded-lg '
					/>
					<div className='absolute bottom-0 left-0 right-0 p-2 font-space-grotesk z-50 text-primary-foreground text-lg font-bold leading-4 line-clamp-2'>
						The football match Olypic 2025 in paris is going to start
					</div>
				</div>
				<Button className='w-fit rounded-full' variant='outline' asChild>
					<Link href={`/dashboard/streams/${'stream.id'}`}>
						<span className='text-sm'>Stream Details</span>
					</Link>
				</Button>
			</div>
		</>
	)
}

export default latestStream
