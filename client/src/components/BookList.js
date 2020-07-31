import React from 'react'
import { useQuery } from '@apollo/client'
import { BOOK_LIST } from '../queries/queries'

const BookList = () => {

    const { loading, error, data } = useQuery(BOOK_LIST)
    console.log('Test Data: ', data)

    console.log('loading: ', loading)
    if(loading) return <p>Loading...</p>

    console.log('error: ', error)
    if(error) return <p>Something Wrong</p>

    console.log("data books : ", data.books)

    const displayBooks = data.books.map(book => {
        return(
            <li key={book.id}>{book.name}</li>
        )
    })

    return (
        <>
            <ul id="book-list">
                {displayBooks}
            </ul>
        </>
    )
}

export default BookList