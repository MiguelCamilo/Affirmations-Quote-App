export default function Quotes({ data }) {
	// remember that name of the data
	// has to match the back end code
	const { quote, name } = data;
	// this will hold the quote list
	return (
		<div className="flex flex-col md:flex-row items-center justify-center">
		<div className="mt-5">
			<div className="text-center border-2 border-stone-400 rounded-md overflow-hidden bg-green-400 hover:bg-green-200 drop-shadow-2xl mx-5 p-1 md:p-3">
				<p className="text-black">"{quote}"</p>
				<p className="text-black">  - {name}</p>
			</div>
		</div>
		</div>
	);
}
