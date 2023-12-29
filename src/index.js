import React from "react"
import ReactDOM from 'react-dom/client'

const BookList = () => {
  return <section>
    <Book/>
  </section>
}

const Book = () => {
  return <article>
    <Image />
    <Title />
    <Author />
  </article>
}



const Image = () => <h2>Image Placeholder</h2>
const Title = () => <h2>Book Title</h2>
const Author = () => {
  return <h4>Author</h4>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// remember the div in public html
root.render(<BookList />); // rendering the greeting component 


// JSX rules
// - return one element 
// - can use div but probably sticking to html semantics like article/section is best or nav/footer/header etc. 
// this is not a rule but important to make code more readable i.e a million divs can be difficult to read.
// .Fragment = returning without the extras - for example 