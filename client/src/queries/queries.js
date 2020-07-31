import { gql } from '@apollo/client'

export const ADD_BOOK = gql`
    query addBook {
        authors {
            name
            id
        }
    }
`

export const BOOK_LIST = gql`
    query getBooksList {
        books {
            name
            genre
            id
        }
    }
`

export const ADD_BOOK_MUTATION = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
        addBookMutation(name: $name, genre: $genre, authorId: $authorId) {
            name
            genre
            authorId
        }
    }
`

export const GET_BOOK_QUERY = gql`
    query($id: ID) {
        book(id: $id) {
            id
            name
            genre
            author {
                name
                age
            }
        }
    }
`