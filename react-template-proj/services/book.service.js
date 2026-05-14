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
        const ctgs = ['Love', 'Fiction', 'Poetry', 'Computers', 'Religion']
        const books = []
        for (let i = 0; i < 20; i++) {
            const book = {
                id: utilService.makeId(),
                title: utilService.makeLorem(2),
                subtitle: utilService.makeLorem(4),
                authors: [
                    utilService.makeLorem(1)
                ],
                publishedDate: utilService.getRandomIntInclusive(1950, 2024),
                description: utilService.makeLorem(20),
                pageCount: utilService.getRandomIntInclusive(20, 600),
                categories: [ctgs[utilService.getRandomIntInclusive(0, ctgs.length - 1)]],
                thumbnail: `http://coding-academy.org/books-photos/${i + 1}.jpg`,
                language: "en",
                listPrice: {
                    amount: utilService.getRandomIntInclusive(80, 500),
                    currencyCode: "EUR",
                    isOnSale: Math.random() > 0.7
                }
            }

            books.push(book)
        }

        utilService.saveToStorage(BOOK_KEY, books)
        console.log('books', books)
    }
}

// function _createBooks() {

//     let books = utilService.loadFromStorage(BOOK_KEY)
//     if (!books || !books.length) {
//         books = [{
//             "id": "OXeMG8wNskc",
//             "title": "metus hendrerit",
//             "description": "placerat nisi sodales suscipit tellus",
//             "thumbnail": "http://ca.org/books-photos/20.jpg",
//             "listPrice": {
//                 "amount": 150,
//                 "currencyCode": "EUR",
//                 "isOnSale": false
//             }
//         }, {
//             "id": "OXeMG8we34",
//             "title": "lorem hendrerit",
//             "description": "placerat nisi sodales suscipit tellus",
//             "thumbnail": "http://ca.org/books-photos/20.jpg",
//             "listPrice": {
//                 "amount": 109,
//                 "currencyCode": "EUR",
//                 "isOnSale": true
//             }
//         }, {
//             "id": "OXeMG8wN23df",
//             "title": "lorem ipsum",
//             "description": "placerat nisi sodales suscipit tellus",
//             "thumbnail": "http://ca.org/books-photos/20.jpg",
//             "listPrice": {
//                 "amount": 80,
//                 "currencyCode": "EUR",
//                 "isOnSale": false
//             }
//         }];
//         utilService.saveToStorage(BOOK_KEY, books)
//     }
// }