'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShareNodes, faXmark, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
	const [searchIsOpen, setSearchIsOpen] = useState(false);
	const search = () => {
		setSearchIsOpen(!searchIsOpen);
	};

	return (
		<header>
			<nav className="relative py-8 px-4 flex justify-between items-center shadow-md shadow-slate-300">
				{!searchIsOpen && (
					<div className="w-full md:w-auto md:hidden">
						<h3 className="text-neutral-950 font-semibold ">Real Food Store</h3>
					</div>
				)}
				<div className="hidden md:block">
					<h3 className="text-neutral-950 font-semibold ">Real Food Store</h3>
				</div>

				<div className="flex justify-end md:justify-center items-center w-full md:w-auto gap-x-4">
					<FontAwesomeIcon onClick={search} icon={searchIsOpen ? faXmark : faSearch} width="20" />
					{searchIsOpen && (
						<div className="max-w-md mx-auto w-full md:hidden">
							<div className="relative w-full rounded-lg  bg-white overflow-hidden">
								<input
									className="w-full outline-none text-sm bg-white text-gray-700 px-2"
									type="text"
									id="search"
									placeholder="Search something.."
								/>
							</div>
						</div>
					)}
					<Link href="#" className="relative">
						<FontAwesomeIcon icon={faCartShopping} width="20" />
						<span className="absolute h-4 w-4 -right-4 -top-3 text-xs rounded-full text-center text-white bg-red-500 w-6 h-6">2</span>
					</Link>
					<FontAwesomeIcon icon={faShareNodes} width="20" />
				</div>
			</nav>
			{searchIsOpen && (
				<div className="relative w-full hidden md:block  bg-white shadow-xl" id="search-content">
					<div className="container mx-auto py-4 text-black">
						<input
							className="w-full h-8 outline-none text-sm bg-white text-gray-700 px-2"
							type="text"
							autoFocus="true"
							id="search"
							placeholder="Search something.."
						/>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;
