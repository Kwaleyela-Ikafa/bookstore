import React from 'react';

const AddBook = () => {
    return (
        <>
        <h1>Add New Book</h1>
        <form>
            <input type="text" placeholder="Book title" />
            <input type="text" placeholder="Book author" />
            <button type="submit">Add Book</button>
        </form>
        </>
    )
}

export default AddBook;