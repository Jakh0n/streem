import { SidebarTrigger } from '../ui/sidebar'
import ModeToggle from './mode-toggle'

const Actions = () => {
	return (
		<div className='flex items-center gap-2'>
			<ModeToggle />
			<SidebarTrigger />
		</div>
	)
}

export default Actions
