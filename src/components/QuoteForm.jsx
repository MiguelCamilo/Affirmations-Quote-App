import { useState, useEffect } from "react";

export default function QuoteForm({ setQuotes }) {
	const [quote, setQuote] = useState(""); // empty string is needed to control state
	const [name, setName] = useState("");
    const [clear, setClear] = useState(false)

	const handleSubmit = (e) => {
        e.preventDefault()
		fetch(`https://affirmation-quote-api.web.app/quotes`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ quote, name }),
		})
			// create new quote in DB
			.then((res) => res.json())
            .then(setQuotes)
			.then(() => {
                setClear(true)
            })
			.catch((err) => console.error(err));
	};

    // checks if clear has changed to true 
    // then sets state back to empty string
    useEffect(() => {
        if (clear) {
            setName("")
            setQuote("")
            setClear(false)
        }
    },[clear])

	return (
        <div className="flex md:flex-col justify-around p-6 mt-[12rem] md:mt-[30rem] md:mx-2 md:border md:border-slate-900 md:rounded-md">
		<form onSubmit={handleSubmit} className="">
			<label htmlFor="quote">
				Quote
				<input
					type="text"
					name="quote"
					required
                    value={quote}
					onChange={(e) => setQuote(e.target.value)}
                    className="border-2 border-stone-900  ml-2 rounded-md"
				/>
			</label>

            <label htmlFor="name" className="ml-0 md:ml-2">
                Name
                <input 
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 border-stone-900  ml-2 rounded-md mt-3 md:mt-0"
                />
            </label>
            <button type="submit" value="add" className="bg-blue-500 p-1 rounded-lg mt-3 md:mt-0 ml-[6em] md:ml-2">
                Add Quote
            </button>
		</form>
        </div>
	);
}
