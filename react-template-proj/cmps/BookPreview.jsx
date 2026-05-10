export function BookPreview({ book, index }) {
    return (
        <section className="book-preview">
            <h2>{book.title}</h2>
            <img src={`../assets/img/${index + 1}.jpg`} />
            <h4>Price: {book.listPrice.amount}</h4>
        </section>
    )
}