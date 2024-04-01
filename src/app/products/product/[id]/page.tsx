'use client'
import data from '../../../api/data.json';
import React, { useEffect,useRef } from 'react';


const Page = ({ params }: { params: { id: string } }) => {
	const id  = Number(params.id) ;
	useEffect(() => {
		const json = data.filter((product) => product.id === id);
		console.log(json);
	},[id])

	return (
		<div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
			hello world {id}
		</div>
	);
};

export default Page;