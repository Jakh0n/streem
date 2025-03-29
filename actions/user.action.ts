'use server'

import { actionClient } from '@/lib/safe-action'
import { usernameSchema } from '@/lib/validation'
import { FollowingResponse, RecommendedResponse } from '@/types'

export const getRecommended = actionClient.action(
	async (): Promise<RecommendedResponse> => {
		await new Promise(resolve => setTimeout(resolve, 1000))
		return { recommended: data }
	}
)

export const getFollowing = actionClient.action(
	async (): Promise<FollowingResponse> => {
		await new Promise(resolve => setTimeout(resolve, 1000))
		return { following: data }
	}
)

export const getUserByUsername = actionClient
	.schema(usernameSchema)
	.action(async ({ parsedInput }) => {
		const user = data.find(user => user.username === parsedInput)
		return { user }
	})

const data = [
	{
		id: '1',
		username: 'jakhongirbek',
		avatar: 'https://github.com/shadcn.png',
		followedBy: 8,
		fullName: 'Jakhon Yokubov',
	},
	{
		id: '2',
		username: 'oman',
		avatar: 'https://github.com/shadcn.png',
		followedBy: 23,
		fullName: 'Oman',
	},
]
