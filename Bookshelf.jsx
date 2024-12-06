
import { useState } from 'react';


const Bookshelf = () => {

  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);
  
  const [newBook, setNewBook] = useState ({
    title: '', author: '',
  })
  
  const handleInputChange = (event) => {
    setNewBook({...newBook,[event.target.name]: event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook])
  }

  return (
<>
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Title: </label>
      <input
       id="title"
       name="title"
       value={newBook.title}
       onChange={handleInputChange}
       />
       <label htmlFor='author'>Author</label>
       <input
       id='author'
       name='author'
       value={newBook.author}
       onChange={handleInputChange}
       />
       <button type="submit">Submit</button>
    </form>
  </div>
  <div className="bookCardsDiv">
    <ul>
    {books.map((book) => (
      <div className='bookCard'>
      <li key={book.title}>Title: {book.title}</li>
      <li>Author: {book.author}</li>
      </div>
    ))}
    </ul>
  </div>
</div>
</>
)}

export default Bookshelf