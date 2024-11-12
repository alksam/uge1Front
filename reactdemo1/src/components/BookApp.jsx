import React ,{useState}from 'react'
import BookList from './BookList'
import BookForm from './BookForm'
import"../App.css"

const BookApp= () => {
    const [ update , setupdate]= useState([false])


  return (
<>
<BookForm update={update} setupdate={setupdate}/>
<BookList update={update} setupdate={setupdate}/>
</>
  )
}

export default BookApp