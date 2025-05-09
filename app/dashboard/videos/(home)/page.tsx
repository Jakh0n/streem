import { getHomeFeed } from '@/actions/feed.action'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Plus } from 'lucide-react'
import { columns, DataType } from '../_components/columns'
import { DataTable } from '../_components/data-table'

const HomePage = async () => {
	const data = await getHomeFeed()
	const feed = data?.feed

	const formattedData: DataType[] = feed?.map(item => ({
		id: item.id,
		thumbnail: item.thumbnail,
		title: item.title,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		visibility: 'Public',
		createdAt: item.createdAt,
		views: 100,
		comments: 20,
		likes: 50,
	}))

	return (
		<div>
			<div className='flex justify-between items-center mb-4'>
				<div className='flex flex-col space-y-0'>
					<h1 className='text-2xl font-bold font-space-grotesk'>Videos</h1>
					<p className='text-sm text-muted-foreground'>
						Manage your videos and get insights about your audience
					</p>
				</div>

				<Button variant='outline' size='sm'>
					<Plus className='w-4 h-4' />
					<span className='text-sm font-medium'>Upload Video</span>
				</Button>
			</div>
			<Separator className='my-3' />
			<DataTable columns={columns} data={formattedData} />
		</div>
	)
}

export default HomePage
