import ClerkProvider from '@/components/providers/clerk-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { ChildProps } from '@/types'
import { Montserrat, Space_Grotesk } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-montserrat',
})
const space_Grotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-space-grotesk',
})

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${montserrat.variable} ${space_Grotesk.variable} antialiased`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<ClerkProvider>
						<Toaster />
						<NextTopLoader showSpinner={false} />
						{children}
					</ClerkProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
