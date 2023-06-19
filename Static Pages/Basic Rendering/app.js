// * First is the tag you want to display and second parameter is the div container 
// ReactDOM.render(<h1>Hello Everyone</h1>, document.getElementById("root"))


// *  an ul with multiple li
// ReactDOM.render(
//     <ul>
//         <li>Amazon</li>
//         <li>Flipkart</li>
//     </ul>,
//     document.getElementById("root")
// )

// ? Why love react?
// * 1. This is a composbale component
function MainContent(){
    return (
        <h1>Hello</h1>
    )
}
// ReactDOM.render(
//     <div>
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )

// * 2.React is declaritive, tell me what to do, how it is implemented will be taken car

/*Vanilla JS
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root

*/

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative approach"
h1.className = "header"
document.getElementById("root").append(h1)

console.log(h1);
//! Output - <h1 class="header">

// JSX - JS and XML
const element = <h1 className = "header">This is JSX</h1>
console.log(element);
//! Ouput - 
// "$$typeof": Symbol("react.element")
// ​
// _owner: null
// ​
// _self: null
// ​
// _source: null
// ​
// _store: Object { … }
// ​
// key: null
// ​
// props: Object { className: "header", children: "This is JSX" }
// ​
// ref: null
// ​
// type: "h1"

// ReactDOM.render(element, document.getElementById("root"))

const navbar = (
    <nav>
        <h1>
            ReactJS
        </h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

// ReactDOM.render(navbar, document.getElementById("root"))

// * React 18 new way

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.rendor(navbar)
ReactDOM.createRoot(document.getElementById("root")).render(navbar)