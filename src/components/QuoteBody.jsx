import { useEffect, useState } from "react"
import QuoteForm from "./QuoteForm"
import Quotes from "./Quotes"
import Header from "./Header"

export default function QuoteBody () {
    const [quotes, setQuotes] = useState()

    useEffect(() => {
        fetch(`https://affirmation-quote-api.web.app/quotes`)
            .then(res => res.json())
            .then(setQuotes)
            .catch(err => console.error(err))
    },[])
    console.log(quotes)

    return (
        <main className='w-[20rem] h-[35rem] md:w-[40rem] md:h-[50rem] mb-20 md:mb-0 bg-white rounded-lg'>
            <div>
                <Header />
                {!quotes
                    ? <h3 className="text-center font-extrabold mt-2">Loading...</h3>
                    : quotes.map((element) => (
                        <Quotes 
                            key={element.id}
                            data={element}
                        />
                    ))
                }
                <QuoteForm setQuotes={setQuotes} />
            </div>
        </main>
    )
}