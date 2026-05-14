import { BookPreview } from "./BookPreview.jsx"


export function BookList({ books, onSetSelectedBook }) {

    return (
        <section className="book-list">
            <h2>Book list</h2>
            <div className="book-grid">
                {books.map((book, index) => {
                    return (
                        <section className="book-card" key={book.id}>
                            <BookPreview book={book} index={index} />
                            <button onClick={() => onSetSelectedBook(book.id)}>Details</button>
                        </section>
                    )
                })}
            </div>
        </section>
    )
}