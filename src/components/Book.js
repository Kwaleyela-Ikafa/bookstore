import React from 'react';

const Book = ({title, author}) => {
    return (
        <>
        <div className="book-container">
            <h2>{title}</h2>
            <h2>{author}</h2>
            <button>Remove</button>
        </div>
        </>
    )
}

export default Book;