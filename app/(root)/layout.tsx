import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ChildProps } from '@/types'
import { AppSidebar } from './_components/sidebar/app-sidebar'

function Layout({ children }: ChildProps) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarTrigger />
			<main>{children}</main>
		</SidebarProvider>
	)
}

export default Layout
