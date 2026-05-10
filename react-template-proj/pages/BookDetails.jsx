import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookDetails({ onSetSelectedBookId, selectedBookId, bookIndex }) {

    const [book, setBook] = useState(null)

    useEffect(() => {
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(selectedBookId)
            .then((book) => setBook(book))
    }

    if (!book) return "Loading..."
    return (
        <section className="book-details">

            <h1>{book.title}</h1>
            <h2>{book.description}</h2>
            <img src={`../assets/img/${bookIndex + 1}.jpg`} />
            <h3>Price: {book.listPrice.amount}</h3>

            <button onClick={() => onSetSelectedBookId(null)}>Back</button>


        </section>
    )
}