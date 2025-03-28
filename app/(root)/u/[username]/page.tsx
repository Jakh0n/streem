interface UsernamePageProps {
	params: Promise<{ username: string }>
}

const UserNamePage = async ({ params }: UsernamePageProps) => {
	const { username } = await params
	return <div>{username}</div>
}

export default UserNamePage
