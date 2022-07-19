import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function MainContent(){
//   return (
//     <h1>ena ki zebi</h1>
//   )
// }

// ReactDOM.render(<div>
//   <h1>hi</h1>
//   <MainContent></MainContent>

// </div>
// ,document.getElementById("root"))
// -------------------------------------------------------------------------------------------------------



// const h1 = document.createElement("h1")
// h1.textContent = "hello"
// h1.className = "header"
// document.getElementById("root").append(h1);
// --------------------------------------------------------------------------------------------------------


// ReactDOM.render(<h1 className='heder' >hello </h1>, document.getElementById("root"))


// --------------------------------------------------------------------------------------------------------


// const element = <h1 className='heder' >hello </h1>

// ReactDOM.render(element, document.getElementById("root"))
// console.log(element)
// -------------------------------------------------------------------------------------------


// const navbar =(
//   <nav>
//     <h1>7tiwch</h1>
//     <ul>
//       <li>menu</li>
//       <li>about</li>
//       <li>contanct</li>
//     </ul>
//   </nav>
// )
// ReactDOM.render(navbar,document.getElementById("root"))
// -----------------------------------------------------------------------------------------------



// const page =(
//   <div>
//     <h1>my awesome website in react</h1>
//     <h3>welcome</h3>
//     <ol>
//       <li>your name</li>
//       <li>your surname</li>
//       <li> your fucking name</li>
//     </ol>
//   </div>
// )
// ReactDOM.render(page,document.getElementById("root"))
// -----------------------------------------------------------------------------------------------



function page(){
    return(
        <div>
            <header>
                <nav>hi</nav>
            </header>
            <ol>
                <li>it's free</li>
                <li>it's fast</li>
            </ol>
        </div>
    )
}
ReactDOM.render(<div><page></page></div>,document.getElementById("root"))