import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarSeparator,
} from '@/components/ui/sidebar'
import { SignOutButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { ChevronUp, User2 } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import Following, { FollowingSkeleton } from './following'
import Navigation from './navigation'
import Recommended, { RecommendedSkeleton } from './recommended'

export async function AppSidebar() {
	const user = await currentUser()
	return (
		<Sidebar collapsible='icon'>
			<SidebarContent>
				<Navigation />
				<SidebarSeparator />
				<Suspense fallback={<FollowingSkeleton />}>
					<Following />
				</Suspense>
				<SidebarSeparator />
				<Suspense fallback={<RecommendedSkeleton />}>
					<Recommended />
				</Suspense>
			</SidebarContent>
			<SidebarFooter>
				{user && (
					<SidebarMenu>
						<SidebarMenuItem>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<SidebarMenuButton>
										<User2 /> Profile
										<ChevronUp className='ml-auto' />
									</SidebarMenuButton>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									side='top'
									className='w-[--radix-popper-anchor-width]'
								>
									<DropdownMenuItem>
										<Link href={`u/${user.username}`}>
											<span>Account</span>
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Link href='/dashboard'>
											<span>Dashboard</span>
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<SignOutButton>
											<span>Sign out</span>
										</SignOutButton>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</SidebarMenuItem>
					</SidebarMenu>
				)}
			</SidebarFooter>
		</Sidebar>
	)
}
