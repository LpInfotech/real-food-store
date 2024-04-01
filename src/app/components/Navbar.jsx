'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {
	const [searchIsOpen, setSearchIsOpen] = useState(false);
	const search = () => {
		setSearchIsOpen(!searchIsOpen);
	};
	return (
		<header className="py-5 px-4 flex justify-between items-center shadow-md shadow-slate-300">
			<div>
				<h3 className="text-neutral-950 font-semibold">Real Food Store</h3>
			</div>
			<div className="flex justify-center items-center gap-x-4">
				<FontAwesomeIcon onClick={search} icon={faSearch} width="20" />
				{searchIsOpen && (
					<div class="max-w-md mx-auto">
						<div class="relative w-full h-8 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
							<input
								class="h-5 w-full outline-none text-sm bg-white text-gray-700 p-5"
								type="text"
								id="search"
								placeholder="Search something.."
							/>
						</div>
					</div>
				)}
				<FontAwesomeIcon icon={faShareNodes} width="20" />
			</div>
		</header>
	);
};

export default Navbar;
