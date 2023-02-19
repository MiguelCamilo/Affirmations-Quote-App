import { useEffect, useState } from "react";
import QuoteForm from "./QuoteForm";
import Quotes from "./Quotes";
import Header from "./Header";
import { api_url } from "../secrets";


export default function QuoteBody() {
	const [quotes, setQuotes] = useState();

	useEffect(() => {
		fetch(api_url.api)
			.then((res) => res.json())
			.then(setQuotes)
			.catch((err) => console.error(err));
	}, []);
	console.log(quotes);

	return (
		<main className="w-[34rem] h-[55rem] md:w-[80rem] md:h-[55rem] bg-white rounded-lg">
			<div>
				<Header />
				<QuoteForm setQuotes={setQuotes} />
				{!quotes ? (
					<h3 className="text-center font-extrabold mt-2">Loading...</h3>
				) : (
					quotes.map((element) => <Quotes key={element.id} data={element} />)
				)}
			</div>
		</main>
	);
}
