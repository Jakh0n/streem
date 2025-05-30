import { getRecommended } from '@/actions/user.action'
import {
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import Link from 'next/link'
const Recommended = async () => {
	const data = await getRecommended()

	const recommended = data?.data?.recommended || []
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Recommended</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{recommended.length > 0 ? (
						recommended.map(item => (
							<SidebarMenuItem key={item.username}>
								<SidebarMenuButton asChild>
									<Link href={`/u/${item.username}`}>
										<Image
											src={item.avatar}
											alt={item.username}
											width={32}
											height={32}
											className='rounded-full'
										/>
										<div className='flex flex-col'>
											<p className='text-sm font-medium'>{item.username}</p>
											<p className='text-sm text-muted-foreground'>
												{item.followedBy} follower
												{item.followedBy !== 1 && 's'}
											</p>
										</div>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))
					) : (
						<div className='flex items-center justify-center h-full'>
							<p className='text-sm text-muted-foreground'>No recommended</p>
						</div>
					)}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	)
}

export default Recommended
export const RecommendedSkeleton = () => {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Following</SidebarGroupLabel>
			<SidebarContent>
				<SidebarMenu>
					{Array.from({ length: 3 }).map((_, index) => (
						<SidebarMenuItem key={index}>
							<SidebarMenuButton asChild size={'lg'}>
								<div className='flex items-center space-x-4'>
									<Skeleton className='h-8 w-8' />
									<div className='space-y-2'>
										<Skeleton className='h-4 w-16' />
										<Skeleton className='h-4 w-28' />
									</div>
								</div>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>
		</SidebarGroup>
	)
}
