'use client'
import { ChildProps } from '@/types'
import { ClerkProvider as Clerk } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'
const ClerkProvider = ({ children }: ChildProps) => {
	const { resolvedTheme } = useTheme()
	return (
		<Clerk
			appearance={{
				baseTheme: resolvedTheme === 'dark' ? dark : undefined,
			}}
		>
			{children}
		</Clerk>
	)
}

export default ClerkProvider
