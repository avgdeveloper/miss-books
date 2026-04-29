import { bookService } from "../services/book.service.js"

const { useEffect, useState } = React

export function BookIndex() {

    useEffect(() => {
        bookService.query().then(books => {
            return books;
        })
    }, [])

    return (
        <div>Book Index</div>
    )
}