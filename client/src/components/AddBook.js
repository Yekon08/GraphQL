import React from 'react'
import { useQuery } from '@apollo/client'
import { ADD_BOOK } from '../queries/queries'


const AddBook = () => {

    const { loading, error, data } = useQuery(ADD_BOOK)

    if(loading) return <p>Loading...</p>
    if(error) return <p>Something Wrong</p>

    const displayAuthors = data.authors.map(author => {
        return(
            <option key={author.id} value={author.id}>{author.name}</option>
        )
    })

    return(
        <>
            <h1>Authors:</h1>

            <form id="add-book">
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label>Genre:</label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label>Author:</label>
                    <select>
                        <option>Select author</option>
                        {displayAuthors}
                    </select>
                </div>
                <button>+</button>
            </form>
        </>
    )
}

export default AddBook