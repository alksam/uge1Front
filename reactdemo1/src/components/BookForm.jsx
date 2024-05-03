import React, { useState } from 'react'

 const BookForm = ({setupdate,update}) => {
    const [book,setBook] = useState({});

    const handleChange  = (e) => {
        setBook({
            ...book,[e.target.id]: e.target.value
        })
    }

    const handleSubmit  = (e) => {
        e.preventDefault();
        console.log(book);
        fetch("http://localhost:3001/books",{
            method: `post`,
            headers:{
            "content-Type":`application/json`,
            },
            body: JSON.stringify(book),
        })
        .then((res)=>{
            res.json();
        }).then((date)=>{
            console.log(date);
            setupdate(!update);
            setBook({})
        });

    }

  return (
<>
<form onSubmit={handleSubmit}>
    <input type='text' value={book.title} id="title" placeholder='Enter book title' onChange={ handleChange}/>
    <input type='text'value={book.author} id="author" placeholder='Enter book author'onChange={ handleChange}/>
    <input type='number' value={book.rating} id="rating" placeholder='Enter book rating'onChange={ handleChange}/>
    <input type='number'value={book.year_published} id="year_published" placeholder='Enter year published'onChange={ handleChange}/>
    <button type='submit '>submit</button>
</form>
    </>
  )
}
export default BookForm;
