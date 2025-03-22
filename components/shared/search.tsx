'use client'
import { SearchIcon, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import qs from 'query-string'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const Search = () => {
	const [term, setTerm] = useState<string>('')
	const router = useRouter()

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const url = qs.stringifyUrl(
			{
				url: '/search',
				query: {
					term,
				},
			},
			{ skipEmptyString: true, skipNull: true }
		)
		router.push(url)
	}

	return (
		<form
			className='flex items-center lg:2/1 w-1/3 relative'
			onSubmit={onSubmit}
		>
			<Input
				placeholder='Search for anything...'
				className='rounded-r-none focus-visible:ring-0  shadow-none  '
				value={term}
				onChange={e => setTerm(e.target.value)}
			/>
			{term && (
				<X
					className='absolute right-10 size-4 text-muted-foregroun '
					onClick={() => setTerm('')}
				/>
			)}
			<Button
				type='submit'
				variant={'secondary'}
				size={'icon'}
				className='rounded-l-none'
			>
				<SearchIcon className='size-4 text-muted-foreground' />
			</Button>
		</form>
	)
}

export default Search
