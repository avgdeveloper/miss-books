import { BookPreview } from "./BookPreview.jsx"


export function BookList({ books, onSetSelectedBookId }) {

    return (
        <section className="book-list">
            <h2>Book list</h2>
            <div className="book-grid">
                {books.map((book, index) => {
                    return (
                        <section className="book-card" key={book.id}>
                            <BookPreview book={book} index={index} />
                            <button onClick={() => onSetSelectedBookId(book.id, index)}>Details</button>
                        </section>
                    )
                })}
            </div>
        </section>
    )
}