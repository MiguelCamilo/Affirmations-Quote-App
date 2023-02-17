export default function Quotes({ data }) {
	// remember that name of the data
	// has to match the back end code
	const { quote, name } = data;
	// this will hold the quote list
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="border-2 border-slate-900 m-2 p-2">
				<p className="text-black">"{quote}"</p>
				<p className="text-black">  - {name}</p>
			</div>
		</div>
	);
}
