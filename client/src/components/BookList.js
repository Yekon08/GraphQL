import React from 'react'
import { gql, useQuery } from '@apollo/client'

const BOOK_LIST = gql`
    query getBooksList {
        books {
            name
            genre
        }
    }
`

const BookList = () => {

    const { loading, error, data } = useQuery(BOOK_LIST)

    console.log('Test Data: ', data)

    return (
        <>
            <ul id="book-list">
                <li>Book name</li>
            </ul>
        </>
    )
}

export default BookList