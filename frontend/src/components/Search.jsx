import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export const Search = ({ onSearch }) => {
	const [username, setUsername] = useState('')

    return (
        <form
			className='max-w-xl mx-auto p-2 sm:w-72'
			onSubmit={ (e) => onSearch(e, username) }
		>
			<label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only'>
				Search
			</label>
			<div className='relative'>
				<div className='absolute inset-y-0 start-0 flex items-center z-10 ps-3 pointer-events-none'>
					<IoIosSearch className='w-5 h-5' />
				</div>
				<input
					onChange={ (e) => setUsername(e.target.value) }
					type='search'
					id='default-search'
					className='block w-full p-4 ps-10 text-sm rounded-lg bg-glass focus:ring-blue-500 focus:border-blue-500 bg-transparent focus:bg-transparent '
					placeholder='username'
					required
					value={username}
				/>
				<button
					type='submit'
					className='text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  bg-gradient-to-r from-emerald-600 to-indigo-700 transition-all duration-300 hover:scale-110'
				>
					Search
				</button>
			</div>
		</form>
    )
}
