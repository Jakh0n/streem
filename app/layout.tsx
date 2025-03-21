import { ChildProps } from '@/types'
import { Montserrat, Space_Grotesk } from 'next/font/google'
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
		<html lang='en'>
			<body
				className={`${montserrat.variable} ${space_Grotesk.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
