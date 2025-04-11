import Description from '../_components/description'
import UserInformation from '../_components/user-information'
import VideoActions from '../_components/vide-actions'

interface VideoPageProps {
	params: {
		videoId: string
	}
}

const VideoPage = async ({ params }: VideoPageProps) => {
	return (
		<div className='grid grid-cols-4 gap-4 '>
			<div className='col-span-3 space-y-4'>
				<div className='aspect-video rounded-md bg-secondary'></div>
				<h1 className='text-2xl font-semibold font-space_grotesk leading-none line-clamp-2 '>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
					quos.
				</h1>
				<div className='flex items-center justify-between'>
					<UserInformation />
					<VideoActions reaction='LIKE' />
				</div>
				<Description />
			</div>
		</div>
	)
}

export default VideoPage
