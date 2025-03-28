import React from 'react'

export interface ChildProps {
	children: React.ReactNode
}

export interface User {
	id: string
	label: string
	avatar: string
	followedBy: number
	fullName: string
}

export interface FollowingResponse {
	following: User[]
}

export interface RecommendedResponse {
	recommended: User[]
}
