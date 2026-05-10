import { storageService } from "./async-storage.service.js"
import { utilService } from "./util.service.js"
const BOOK_KEY = "bookDB"
_createBooks()


export const bookService = {
    query,
    get,
    getDefaultFilter
}

function query(filterBy = {}) {
    return storageService.query(BOOK_KEY)
        .then((books) => {
            if (filterBy.title) {
                const regExp = new RegExp(filterBy.title, 'i')
                books = books.filter(book => regExp.test(book.title))
            }
            if (filterBy.price) {
                books = books.filter(book => book.listPrice.amount >= filterBy.price)
            }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function getDefaultFilter() {
    return { title: '', price: '' }
}

function _createBooks() {

    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = [{
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
        utilService.saveToStorage(BOOK_KEY, books)
    }
}