

const Page = ({ params }: { params: { id: string } }) => {
	const id = params.id;
	return (
		<div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
			hello world {id}
		</div>
	);
};

export default Page;