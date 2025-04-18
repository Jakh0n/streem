import React from 'react'

export interface ChildProps {
	children: React.ReactNode
}

export interface User {
	id: string
	username: string
	avatar: string
	followedBy: number
	fullName: string
}

export interface Feed {
	id: string
	thumbnail: string
	createdAt: Date
	title: string
	user: User[]
}
export interface FollowingResponse {
	following: User[]
}

export interface RecommendedResponse {
	recommended: User[]
}
