import React from 'react'
import { gql, useQuery } from '@apollo/client'

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
        }
    }
`