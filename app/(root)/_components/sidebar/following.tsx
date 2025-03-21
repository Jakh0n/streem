import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { following_items } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
const Following = () => {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Followed By</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{following_items.map(item => (
						<SidebarMenuItem key={item.label}>
							<SidebarMenuButton asChild>
								<Link href={`u/${item.label}`}>
									<Image
										src={item.avatar}
										alt={item.label}
										width={32}
										height={32}
										className='rounded-full'
									/>
									<div className='flex flex-col'>
										<p className='text-sm font-medium'>{item.label}</p>
										<p className='text-sm text-muted-foreground'>
											{item.followedBy} follower
											{item.followedBy !== 1 && 's'}
										</p>
									</div>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	)
}

export default Following
