import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { LogIn } from 'lucide-react'
import { Button } from '../ui/button'
import { SidebarTrigger } from '../ui/sidebar'
import ModeToggle from './mode-toggle'
const Actions = () => {
	return (
		<div className='flex items-center gap-2'>
			<ModeToggle />
			<SidebarTrigger />
			<SignedOut>
				<SignInButton mode='modal'>
					<Button variant='secondary' size='sm' className='rounded-full'>
						<span className='hidden md:block'>Sign in</span>
						<LogIn className='size-4' />
					</Button>
				</SignInButton>
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</div>
	)
}

export default Actions
