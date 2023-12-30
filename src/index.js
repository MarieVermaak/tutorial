import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';


const firstBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: './images/book-1.jpg',
};

const secondBook = {
  author: 'Daniel James Brown',
  title: 'The Boys in the Boat',
  img: './images/book-2.jpg',
};

const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum a libero quis iure nostrum.</p>
      <button>Click me</button>
      </Book>

      <Book 
      author={secondBook.author}
      title={secondBook.title} 
      img={secondBook.img} />

    </section>
  );
}

const Book = ({img, title, author, children}) => {
  return (
    <article className='book'>
      <img src={img} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
// remember the div in public html
root.render(<BookList />); // rendering the greeting component 


// JSX rules
// - return one element 
// - can use div but probably sticking to html semantics like article/section is best or nav/footer/header etc. 
// this is not a rule but important to make code more readable i.e a million divs can be difficult to read.
// .Fragment = returning without the extras - for example 


//JSX -CSS (inline styles)

// - use style prop on the element = {}
// - curly braces mean we are going back to JS land :) able to use js logic inside the curly
// - value is an object with key/value pairs - capitalized and with '' 
// example 
// const Author = () => (
//<h4 style= {{color:'#617d98', fontSize:'0.75', marginTop:'0.5rem'}}>
// Jordan Bob
//</h4>
//);
// css rules still apply (inline vs external css) i.e you can't override same element in css external file vs inline style 
// -value inside needs to be an expression (return value) and can't be a STATEMENT
// images need to be in a public folder and named images (or whatever you want to name it) and 
//accessed ./images/bunpie.jpg for example. This is Create-React-App specific :)

//Parameters and arguments in REACT
// *PARAMETERS
// - const someFunc= (param1, param2) => {
// console.log(param1, param2);
// };
// - *ARGUMENTS
// - someFunc('job', 'developer');


//PROPS IN REACT
// - provided by default, we don't need to make anything const Book = (props) => 
// - prop will only be displayed if it's actually provided 



// examples = const firstBook = {
//author:'Jamie Douglas',
//title: 'Where The Wind Blows',
//img:'./images/book-278.jpg'
// };  ----> here I created an object and set them up as properties

// const secondBook = {
//author:'Dale Young',
//title: 'Killer By Night',
//img:'./images/book-99.jpg' 
// };

// Another way to structure the code above is :
//const Book = (props) => {
//   const { img, title, author } = props; -----> pull in what you need, no need for props.Name x 10000
//   return (                              ------> we can't magically provide a prop with values that aren't there to begin with i.e set up your props
//     <article className='book'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//     </article>
//   );
// };

// Special prop in React = Children ^_^
// - gives us access to everything we render between component tags
// - special prop, has to be children
