import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: './images/book-1.jpg',
    id: 1,
  },

  {
    author: 'Daniel James Brown',
    title: 'The Boys in the Boat',
    img: './images/book-2.jpg',
    id: 2,
  },
];






const BookList = () => {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input');
  };

  const handleButtonClick = () => {
    alert('handle Button Click');
  };

  return <section>
    <form>
      <h1>Typical Form</h1>
      <input type='text'
        name='example'
        onChange={handleFormInput}
        style={{ margin: '1rem 0' }} 
        />
    </form>

    <button onClick={handleButtonClick}> Click Me </button>

  </section >
};

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};


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

// Lists = .Map as the array method
// - refactor your code with const books = [] ---> remember square brackets usually indicate an array so we are putting our objects into an array
// -  each item is that object 
// in React we can't render objects directly from JSX
// here comes map! .Map is making a new array from calling a function on each array element 
// i.e =


//const names = ['john', 'peter', 'susan'];
// const newNames = names.map((name) => { ----> names.Map and a callback function, it will return newNames which is the new array and we wrap it 
//   console.log(name);
//   return <h1>{name}</h1>;
// });  

// function BookList() {
//   return <section className='booklist'>{newNames}</section>;
// }
// the parameter is referencing the string or object and remember to wrap what you;re grabbing the for example
// {name} curly brackets is IMPORTANT
// create a list, iterate over the list to return the needed html ---. pretty cool :)

// Key prop - an id ---->  so react can identify it. Usually the data we pull would have an id, it can also be a string whatever 
// to uniquely identify it.
// Key placement can be confusing but always do it where we are reiterating over data and set on the item you are returning 


//Passing the entire object -----> "..."
// can use this as well using the spread operator 
// const friends = ['john', 'peter', 'anna'];
// const newFriends = [...friends, 'susan'];
// console.log(friends);
// console.log(newFriends);
// const someObject = {
//   name: 'john',
//   job: 'developer', ----> please note this wont be passed as a reference it's just copying 

// Handling events in React
// - start with vanilla js 

// example: 
// const btn= document.getElementById('btn'); ---> in prep for a classic click event in vanilla js 
// btn.addEventListener('click', function (e) {
//  ---> access event listener
// ----> do something when event fires
//}); -----> React is similar i.e camel casing and element, event, function 
// Example:
// const EventExamples = () => {
//   const handleButtonClick = () => {
//     alert('handle button click');
//   };
//   return (
//     <section>
//       <button onClick={handleButtonClick}>click me</button>
//     </section>
//   );
// }; ----> onClick, onSubmit, onChange are common but there are many events for react