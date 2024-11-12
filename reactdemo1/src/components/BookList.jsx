import React , {useState,useEffect} from 'react'
import"../App.css"


export default ({update , setupdate}) => {
    const [books, setBooks] = useState([])
    

    useEffect(()=>{
        fetch("http://localhost:3001/books")
        .then(res=>res.json())
        .then(data=> {
            setBooks(data);
        })
    },[update])

const handleDelete  = (e) => {
    fetch(`http://localhost:3001/books/${e.target.id}`,{
        method:"DELETE",
})
.then(()=>{
setupdate(!update);
    })
}

//return () => {

//};
//}, []);

 
    return (
        <>
          <h1>Book List</h1>
          <table className="book-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>year_published</th>
                <th>Author</th>
                <th>rating</th>
                <th>Delete</th>

              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.year_published}</td>
                  <td>{book.author}</td>
                  <td>{book.rating}</td>
                  <td>
                    <button id={book.id} onClick= {handleDelete}> Delete</button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
          );
      
    }
        