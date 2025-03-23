import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from '@clerk/nextjs'
import { SidebarTrigger } from '../ui/sidebar'
import ModeToggle from './mode-toggle'
const Actions = () => {
	return (
		<div className='flex items-center gap-2'>
			<ModeToggle />
			<SidebarTrigger />
			<SignedOut>
				<SignInButton />
				<SignUpButton />
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</div>
	)
}

export default Actions
