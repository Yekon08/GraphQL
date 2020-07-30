import React from 'react'
import { gql, useQuery } from '@apollo/client'

const ADD_BOOK = gql`
    query addBook {
        authors {
            name
            id
        }
    }
`

const AddBook = () => {

    const { loading, error, data } = useQuery(ADD_BOOK)

    if(loading) return <p>Loading...</p>
    if(error) return <p>Something Wrong</p>

    const displayAuthors = data.authors.map(author =>{
        return(
            <li key={author.id}>{author.name}</li>
        )
    })

    return(
        <>
            <h1>Authors:</h1>
            <ul>
                {displayAuthors}
            </ul>
        </>
    )
}

export default AddBook