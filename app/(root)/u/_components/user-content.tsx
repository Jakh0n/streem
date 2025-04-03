import { getHomeFeed } from '@/actions/feed.action'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { formatDistanceToNow } from 'date-fns'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const UserContent = async () => {
	const response = await getHomeFeed()

	const feeds = response.feed || []

	return (
		<div className='mb-8'>
			<div className='flex gap-x-4 mt-6 w-full lg:w-2/3 items-start'>
				<div className='w-60 h-40 lg:h-44 rounded-xl relative hidden lg:block'>
					<Image
						src={'https://fakeimg.pl/600x400?text=Jakhon'}
						alt='Jakhon'
						fill
						className='rounded-xl object-cover'
					/>
				</div>

				<div className='flex flex-1 space-y-1 flex-col'>
					<h1 className='text-lg lg:text-2xl font-space_grotesk font-bold'>
						Jakhon&apos;s stream
					</h1>
					<p className='line-clamp-3 text-muted-foreground leading-5 text-sm lg:text-base'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In mollitia
						fuga est. Numquam optio, est maiores iste dolorum dignissimos magni
						officiis nesciunt animi veniam perspiciatis quibusdam tenetur dicta
						voluptatem eos.
					</p>
					<div className='flex items-center gap-x-1'>
						{/* <>
							<Settings2 className='size-4' />
							<span>User has not configured streaming yet.</span>
						</> */}
						<>
							<Calendar className='size-4' />
							<span className='text-sm lg:text-base'>Streamed 2 days ago</span>
						</>
					</div>
					<Button
						asChild
						className='w-fit rounded-full'
						variant={'outline'}
						size={'sm'}
					>
						<Link href={'/s/jakhongirbek'}>Watch stream</Link>
					</Button>
				</div>
			</div>

			<Separator className='my-6' />

			<h1 className='text-2xl font-space_grotesk font-bold'>Videos</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4'>
				{feeds.map(feed => (
					<Link key={feed.id} href={`/v/${feed.id}`}>
						<div>
							<div className='h-56 rounded-lg relative'>
								<Image
									fill
									src={feed.thumbnail}
									alt={feed.title}
									className='object-cover rounded-lg'
								/>
							</div>
							<div className='mt-4 flex'>
								<div className='flex flex-col space-y-0'>
									<h2 className='line-clamp-2 break-words text-sm leading-4'>
										{feed.title}
									</h2>

									<div className='flex items-center gap-x-2 text-sm text-muted-foreground'>
										<p>24 views</p>
										<div className='size-1 rounded-full bg-muted-foreground' />
										<p>
											{formatDistanceToNow(feed.createdAt, { addSuffix: true })}
										</p>
									</div>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default UserContent
export const UserContentSkeleton = () => {
	return (
		<div className='mb-8'>
			<div className='flex gap-x-4 mt-6 w-2/3 items-start'>
				<Skeleton className='w-72 h-44 rounded-xl' />

				<div className='flex flex-1 space-y-1 flex-col'>
					<Skeleton className='w-1/2 h-4' />
					<div className='flex flex-col space-y-1'>
						<Skeleton className='w-full h-2' />
						<Skeleton className='w-full h-2' />
						<Skeleton className='w-1/2 h-2' />
					</div>
					<div>
						<Skeleton className='w-1/4 h-4 mt-2' />
					</div>
					<div>
						<Skeleton className='w-1/3 h-10 rounded-full mt-4' />
					</div>
				</div>
			</div>
			<Separator className='my-6' />

			<h1 className='text-2xl font-space_grotesk font-bold'>Videos</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4'>
				{Array.from({ length: 6 }).map((_, index) => (
					<div key={index}>
						<Skeleton className='h-56 rounded-lg' />

						<div className='mt-4 flex gap-x-2'>
							<Skeleton className='w-10 h-10 rounded-full' />

							<div className='flex flex-col space-y-1'>
								<Skeleton className='w-32 h-4' />
								<Skeleton className='w-20 h-3' />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
