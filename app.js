//  This is a react code
// It js file all we know that react is a js library
// see here we use React and ReactDOM insted of Document.

{
  /* createing a element is core thing of react which comes from first Link 
  here it accepts 3 aruguments which is object (tagName,{accept attributes like class ,id or anything you want like x:y },content*/
}
const heading = React.createElement(
  "h1",
  { id: "heading", className: "headers" },
  "Namaste React class!!!"
);

{
  /* creating root rendering somethin is react dom library which comes from 2nd link
    in js we  use innerHTML here  in react we use createRoot
    and in js we use appendChilde in React automatically do it
   */
}
console.log(heading); //see when we log this it will give object or react element
// and  it has props which childerens that what we have passes in this case
//props: {id: 'heading', className: 'headers', children: 'Namaste React class!!!'}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //this render() convert that object into h1 tag put it into dom

//-------------------------------------------------------------------------------------

/*
How to create a nested elements in react
example:
        <div id="parent">
            <div id="child1">
                <h1></h1>
                <h1></h1>
                <h1></h1>
            </div>
            <div id="child2">
                <h1></h1>
                <h1></h1>
                <h1></h1>
            </div>
        </div>

*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  //if you want sibling then we have to create a array
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
  //if multipl childerns
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ])
);
root.render(
  parent
); /*that red privious parent or anything inside root is replace by this hence "Namaste React class!!!" not visible
because both haveing same  id i.e root but ❤️ visble because they are not the part of id root/div
from this we conclude that react work with in a  whatever make a root as which is id hence react is a library which works in small peace/section of a page*/
console.log(parent);
//we will get object/react element is converted into
// HTML(Browser Understnd) while

// ----------which is above code becomeing complicated-------------
/*
 * which is above code is ugly
 * but our acyully core react look like this finally
 * to make our life easy we use jsx
 */

// -------------------------------------------------------
/*
->script.js file should be after core react and dom react because it is using both the code
else it will throw an error hence order of a file matters.

->what is crossOrigin?


->
*/

/* */

// React It is a small javascript library.
// You can import it like a javascript file into your code.
// it gives you superpowers. You can, you can use the react in your existing web application projects.
// no matter it is using Jquery,java,anything.
// If you have a Jquery application, you just import react.You start using it.
// A framework comes with a lot of baggage along with it. React does not come up with a lot of baggage.
// can we make large scale application from it?Yes Just we are going to see that in the upcoming episode, right? We are going to see amazing things that how we are going to build it up, how we are going to ignite the app. You know, the next episode is igniting our app. We are going
//but this code not  capbale go to production
// React is faster when lot of other packages ,libraries ,codes make our application fast and production ready
