import React from "react"
import ReactDOM from 'react-dom/client'

function Greeting() {
  return <h1>My Component</h1>
}


const root = ReactDOM.createRoot(document.getElementById('root')); // remember the div in public html
root.render(<Greeting />) // rendering the greeting component 