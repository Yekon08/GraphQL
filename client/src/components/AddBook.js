import React, { useReducer } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { ADD_BOOK, ADD_BOOK_MUTATION } from '../queries/queries'


const formInputs = {
    name: '',
    genre: '',
    authorId: ''
}

const reducerForm = (state, { field, value }) => {
    return {
        ...state,
        [field] : value
    }
}

const AddBook = () => {

    const { loading, error, data } = useQuery(ADD_BOOK)
    const [formInputsValues, dispatch] = useReducer(reducerForm, formInputs)
    const [addBookMut, { dataMutation }] = useMutation(ADD_BOOK_MUTATION);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Something Wrong</p>

    const displayAuthors = data.authors.map(author => {
        return(
            <option key={author.id} value={author.id}>{author.name}</option>
        )
    })

    const handleInputChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBookMut({
          variables: {
            name: formInputsValues.name,
            genre: formInputsValues.genre,
            authorId: formInputsValues.authorId,
          },
        });
      };

    return(
        <>
            <h1>Authors:</h1>
            <form id="add-book" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" name="name" value={formInputsValues.name} onChange={handleInputChange} />
                </div>

                <div className="field">
                    <label>Genre:</label>
                    <input type="text" name="genre" value={formInputsValues.genre} onChange={handleInputChange} />
                </div>

                <div className="field">
                    <label>Author:</label>
                    <select name='authorId' onChange={handleInputChange}>
                        {displayAuthors}
                    </select>
                </div>
                <button>+</button>
            </form>
        </>
    )
}

export default AddBook