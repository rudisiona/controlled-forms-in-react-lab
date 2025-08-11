import { useState } from 'react'
import React from 'react'

const Bookshelf = () => {
  const [books, setBooks] = useState([])
  const [newBook, setNewBook] = useState({title: '', author:''})
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({
        ...prevBook,
        [name]: value
    }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevBooks) => [...prevBooks, newBook])
    setNewBook({title:'', author:''})

  }
  
    return (
    <div className="BookeshelfDiv">
      
        <div className="formDiv">
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title:</label>
            <input 
            id='title'
            name='title'
            value={(newBook.title)}
            onChange={handleInputChange}
            >
            </input>
            <label htmlFor='author'>Author:</label>
            <input
            id='author'
            name='author'
            value={(newBook.author)}
            onChange={handleInputChange}
            >
            </input>
            <button type ="submit">Add Book</button>
        </form>
        </div>
        <div className="bookCardsDiv">
            {books.map((book, index) => (
                <div key={index} className="bookCard">
                    <h3>{book.title}</h3>
                    <p>by: {book.author}</p>                    
                    </div>
            ))}
            </div> 
    </div>
  )
}

export default Bookshelf