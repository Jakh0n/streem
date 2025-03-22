import { SidebarProvider } from '@/components/ui/sidebar'
import { ChildProps } from '@/types'
import AppNavbar from './_components/navbar/app-navbar'
import { AppSidebar } from './_components/sidebar/app-sidebar'

function Layout({ children }: ChildProps) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className='w-full h-full'>
				<AppNavbar />
				{children}
			</main>
		</SidebarProvider>
	)
}

export default Layout
