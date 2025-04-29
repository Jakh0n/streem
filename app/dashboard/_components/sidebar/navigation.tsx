'use client'
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { dashboard_navigation_items } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
	const pathname = usePathname()
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Pages</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{dashboard_navigation_items.map(item => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton asChild isActive={pathname === item.route}>
								<Link href={item.route}>
									<item.icon />
									<span>{item.title}</span>
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
