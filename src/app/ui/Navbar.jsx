'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark, faCartShopping, faBell, faUser, faCircleUser, faLock, faCircleQuestion, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';
import data from '../api/data.json';

const Navbar = ({ sendDataToParent = null, isSearch = false }) => {
	const [searchIsOpen, setSearchIsOpen] = useState(false);
	const search = () => {
		setSearchIsOpen(!searchIsOpen);
	};
	const [searchTerm, setSearchTerm] = useState('');

	// get value of search input
	const handleInputChange = (event) => {
		setSearchTerm(event.target.value);
		setTimeout(() => {

			sendDataToParent(searchTerm);
			console.log(searchTerm);
		}, 600);

	};


	return (
		<header>
			<nav className="relative py-4 md:px-20 px-5 flex justify-between items-center shadow shadow-slate-300 bg-white">
				{!searchIsOpen && (
					<Link href="#" className="w-full md:w-auto md:hidden">
						<img src="https://static.wixstatic.com/media/358326_05d4ec90dbaa41189432cef1ef73f5e1~mv2.jpg/v1/fit/w_2500,h_1330,al_c/358326_05d4ec90dbaa41189432cef1ef73f5e1~mv2.jpg" alt="real-food-logo" width={90} />
					</Link>
				)}
				<Link href="#" className="hidden md:flex items-end">
					<img src="https://static.wixstatic.com/media/358326_05d4ec90dbaa41189432cef1ef73f5e1~mv2.jpg/v1/fit/w_2500,h_1330,al_c/358326_05d4ec90dbaa41189432cef1ef73f5e1~mv2.jpg" alt="real-food-logo" width={120} />
				</Link>
				{/* added search bar */}
				<div className='border w-1/3 hidden md:block relative rounded-lg'>
					{isSearch &&
						<FontAwesomeIcon onClick={search} icon={faSearch} width={15} className='absolute text-gray-400 top-3 left-3' />}
					<input
						className="w-full outline-none text-sm text-gray-700 px-10 py-3 bg-slate-100"
						type="text"
						id="search"
						placeholder="Search something.."
						value={searchTerm}
						onInput={handleInputChange}
					/></div>
				{/* added search bar */}
				<div className="flex justify-end md:justify-center items-center w-full md:w-auto gap-x-6">
					<div className='md:hidden'>
						{isSearch && <FontAwesomeIcon onClick={search} icon={searchIsOpen ? faXmark : faSearch} width="20" />}
						{(searchIsOpen && isSearch) && (
							<div className="max-w-md mx-auto w-full md:hidden">
								<div className="relative w-full rounded-lg  bg-white overflow-hidden">
									<input
										className="w-full outline-none text-sm bg-white text-gray-700 px-2"
										type="text"
										id="search"
										placeholder="Search something.."
										value={searchTerm}
										onInput={handleInputChange}
									/>
								</div>
							</div>
						)}
					</div>
					<Link href="#" className="relative">
						<FontAwesomeIcon icon={faBell} size='lg' />
						<span className="flex items-center justify-center absolute -right-2 -top-2 rounded-full text-white bg-red-500 w-4 h-4 text-[10px]">2</span>
					</Link>
					<Link href="#" className="relative flex items-center border-l ps-6">
						<FontAwesomeIcon icon={faCartShopping} size='lg' />
						<span className="flex items-center justify-center absolute -right-2 -top-2 rounded-full text-white bg-red-500 w-4 h-4 text-[10px]">2</span>
					</Link>
					<div className='relative'>
						<Link href="#" className='flex items-center border-l ps-6 peer'>
							<FontAwesomeIcon icon={faUser} size='lg' />
							<span className='ps-1'>User</span>
						</Link>
							<div className="dropdown-content absolute top-16 -right-2 z-10 origin-top-right divide-y *:py-3 *:px-5 *:text-sm hidden *:block *:text-gray-700 w-48 peer-hover:block peer-visited:block rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none peer-active:visible">
								<a href="#" className='hover:bg-slate-100 hover:font-bold'>
									<FontAwesomeIcon icon={faCircleUser} /><span className='ms-3'>View Profile</span>
								</a>
								<a href="#" className='hover:bg-slate-100 hover:font-bold'>
									<FontAwesomeIcon icon={faLock} /><span className='ms-3'>Change Password</span>
								</a>
								<a href="#" className='hover:bg-slate-100 hover:font-bold'>
									<FontAwesomeIcon icon={faCircleQuestion} /><span className='ms-3'>Online Help</span>
								</a>
								<a href="#" className='hover:bg-slate-100 hover:font-bold'>
									<FontAwesomeIcon icon={faRightFromBracket} /><span className='ms-3'>Logout</span>
								</a>
							</div>

						</div>
					</div>

			</nav>
			{
				(searchIsOpen && isSearch) && (
					<div className="relative w-full hidden md:block  bg-white shadow-xl" id="search-content">
						<div className="container mx-auto py-4 text-black">
							<input
								className="w-full h-8 outline-none text-sm bg-white text-gray-700 px-2"
								type="text"
								autoFocus="true"
								id="search"
								placeholder="Search something.."
								value={searchTerm}
								onInput={handleInputChange}
							/>
						</div>
					</div>
				)
			}
		</header >
	);
};

export default Navbar;
