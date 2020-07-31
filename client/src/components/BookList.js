import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { BOOK_LIST } from '../queries/queries'
import BookDetails from './BookDetails'

const BookList = () => {

    const [selected, setSelected] = useState(null)
    const { loading, error, data } = useQuery(BOOK_LIST)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Something Wrong</p>

    const displayBooks = data.books.map(book => {
        return(
            <li onClick={(e) => { setSelected(book.id) }} key={book.id}>{book.name}</li>
        )
    })

    return (
        <>
            <ul id="book-list">
                {displayBooks}
            </ul>
            <BookDetails bookId={selected} />
        </>
    )
}

export default BookList