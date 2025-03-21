'use client'
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { navigation_items } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
	const pathname = usePathname()
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Pages</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{navigation_items.map(item => (
						<SidebarMenuItem key={item.label}>
							<SidebarMenuButton asChild isActive={pathname === item.href}>
								<Link href={item.href}>
									<item.icon />
									<span>{item.label}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	)
}

export default Navigation
