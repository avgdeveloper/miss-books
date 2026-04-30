import { storageService } from "./storage.service.js"
const BOOKS_KEY = "books"
_createBooks()

export const bookService = {
    query
}

function query(filterBy = {}) {
    return storageService.loadFromStorage(BOOKS_KEY)
        .then((books) => {
            if (filterBy.title) {
                const regExp = new RegExp(filterBy.title, "i")
                books = books.filter(book => regExp.test(book.title))
            }
            return books;
        })
}

function _createBooks() {
    const model = [{
        "id": "OXeMG8wNskc",
        "title": "metus hendrerit",
        "description": "placerat nisi sodales suscipit tellus",
        "thumbnail": "http://ca.org/books-photos/20.jpg",
        "listPrice": {
            "amount": 150,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    }, {
        "id": "OXeMG8we34",
        "title": "lorem hendrerit",
        "description": "placerat nisi sodales suscipit tellus",
        "thumbnail": "http://ca.org/books-photos/20.jpg",
        "listPrice": {
            "amount": 109,
            "currencyCode": "EUR",
            "isOnSale": true
        }
    }, {
        "id": "OXeMG8wN23df",
        "title": "lorem ipsum",
        "description": "placerat nisi sodales suscipit tellus",
        "thumbnail": "http://ca.org/books-photos/20.jpg",
        "listPrice": {
            "amount": 80,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    }];

    storageService.saveToStorage("books", model);
}