'use client'
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
import { ChevronUp, User2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Following from './following'
import Navigation from './navigation'
import Recommended from './recommended'

export function AppSidebar() {
	const pathname = usePathname()
	return (
		<Sidebar collapsible='icon'>
			<SidebarContent>
				<Navigation />
				<SidebarSeparator />
				<Following />
				<SidebarSeparator />
				<Recommended />
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton>
									<User2 /> Username
									<ChevronUp className='ml-auto' />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								side='top'
								className='w-[--radix-popper-anchor-width]'
							>
								<DropdownMenuItem>
									<Link href='/u/jahon0911'>
										<span>Account</span>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link href='/dashboard'>
										<span>Dashboard</span>
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link href='/sign-out'>
										<span>Sign out</span>
									</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}
