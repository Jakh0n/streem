import { SidebarProvider } from '@/components/ui/sidebar'
import { ChildProps } from '@/types'
import AppNavbar from '../(root)/_components/navbar/app-navbar'
import DaschboardSidebar from './_components/sidebar/dashboard-sidebar'

const DashboardLayout = ({ children }: ChildProps) => {
	return (
		<SidebarProvider>
			<DaschboardSidebar />
			<main className='w-full h-full'>
				<AppNavbar />
				<div className='max-w-6xl container pt-4'>{children}</div>
			</main>
		</SidebarProvider>
	)
}

export default DashboardLayout
