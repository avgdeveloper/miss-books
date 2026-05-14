import { BookList } from "../cmps/BookList.jsx"
import { BookFilter } from "../assets/style/cmps/BookFilter.jsx"
import { bookService } from "../services/book.service.js"
import { BookDetails } from "./BookDetails.jsx"

const { useEffect, useState } = React

export function BookIndex() {

    const [books, setBooks] = useState()
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then(books => {
                setBooks(books);
            })
    }

    function onSetSelectedBook(bookId) {
        const book = books.find(book => book.id === bookId)
        setSelectedBook(book)
    }

    function onSetFilterBy(filterBy) {
        console.log("filterBy:" + filterBy)
        setFilterBy({ ...filterBy })
    }


    if (!books) return "loading"

    return (
        <section className="book-index">
            <h1>Book Index</h1>

            {selectedBook
                ? <BookDetails onGoBack={() => setSelectedBook(null)} book={selectedBook} />
                : <React.Fragment>
                    <BookFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy}></BookFilter>
                    <BookList books={books} onSetSelectedBook={onSetSelectedBook} />
                </React.Fragment>
            }
        </section>

    )
}