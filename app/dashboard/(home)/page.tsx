import { Separator } from '@/components/ui/separator'
import LatestComments from './_components/latest-comments'
import LatestStream from './_components/latest-stream'
import LatestVideos from './_components/latest-videos'
import PublishedVideos from './_components/published-videos'
import Subscribers from './_components/subscribers'

const DashboarPage = () => {
	return (
		<div>
			<div className='w-full lg:w-1/2'>
				<h2 className='text-2xl font-bold'>Channel Dashboard</h2>
				<p className='text-sm text-muted-foreground'>
					Welcome to your cahnnel dashboard. here you can manage your channel
					settings, analytics, and more.
				</p>
			</div>
			<Separator className='my-2' />
			<div className='grid grid-cols-3 gap-4'>
				<LatestVideos />
				<div className='space-y-6'>
					<LatestStream />
					<PublishedVideos />
				</div>
				<div className='space-y-6'>
					<Subscribers />
					<LatestComments />
				</div>
			</div>
		</div>
	)
}

export default DashboarPage
