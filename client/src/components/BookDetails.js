import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_BOOK_QUERY } from '../queries/queries'

const BookDetails = (props) => {

    console.log('test', props.bookId)
    const { loading, error, data } = useQuery(GET_BOOK_QUERY, {
        variables: {
            id: props.bookId
        }
    })

    if(loading) { return <p>Loading...</p> }
    if(error) { return <p>Error...</p> }

    console.log('data single book: ', data)

    if(data.book) {
        return(
            <>
                <h2>Book Title : {data.book.name}</h2>
                <h3>Book Genre : {data.book.genre}</h3>
                <h3>Book Id : {data.book.id}</h3>
                <h3>Book Author & age : {data.book.author.name} {data.book.author.age}yo</h3>
            </>
        )
    }

    return(
        <>
            <p>Output book details here (click on a book)</p>
        </>
    )
}

export default BookDetails