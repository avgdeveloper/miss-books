import { BookList } from "../cmps/BookList.jsx"
import { BookFilter } from "../assets/style/cmps/BookFilter.jsx"
import { bookService } from "../services/book.service.js"
import { BookDetails } from "./BookDetails.jsx"

const { useEffect, useState } = React

export function BookIndex() {

    const [books, setBooks] = useState()
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [selectedBookId, setSelectedBookId] = useState(null)
    const [bookIndex, setBookIndex] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then(books => {
                setBooks(books);
            })
    }

    function onSetSelectedBookId(selectedBookId, index) {
        setSelectedBookId(selectedBookId);
        setBookIndex(index)
    }

    function onSetFilterBy(filterBy) {
        console.log("filterBy:" + filterBy)
        setFilterBy({ ...filterBy })
    }


    if (!books) return "loading"

    return (
        <section className="book-index">
            <h1>Book Index</h1>

            {selectedBookId
                ? <BookDetails onSetSelectedBookId={onSetSelectedBookId} selectedBookId={selectedBookId} bookIndex={bookIndex} />
                : <React.Fragment>
                    <BookFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy}></BookFilter>
                    <BookList books={books} onSetSelectedBookId={onSetSelectedBookId} />
                </React.Fragment>
            }
        </section>

    )
}