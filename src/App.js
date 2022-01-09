import React, { useState } from 'react'
import Tweet from './Tweet';


/* useState is used to change the state of variable to another state */
function App(){
  const [user, setUsers] = useState([
    {name: "Amos", message: "Hello Adriot!!", likes:"36"},
    {name: "Austine", message: "Hello Adriot 2.0!!", likes:"100"},
    {name: "Anyangbeso", message: "Hello Adriot 3.0!!", likes:"86"}
  ])

  /* Using the state together with component in an API real world situation. */
  return(
    <div className='app'>
      {user.map(user =>(
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))}
    </div>
  );


  /* ## declaring the useSate!!
  const [isRed, setRed] = useState(false);
  const [count, setCount]  = useState(0); */


  /* ##Getting some data from an api need to stored in a state 
  const [user, setUser] = useState({
    name : "Austine",
    age: 29,
    posts: ['My first post', 'Summer 2022']
  }); */
  

  /* ##add one to increment!! *
  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  } */

  /* ## to return the toggled color!
  return(
    <div className='app'>
      <h1 className={isRed ? 'red' : ""}>Change my Color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  ) */

  /* tweets return function.
  return(
    <div className='app'>
      <Tweet name="Austin" message="random tweet" likes= "12"/>
      <Tweet name="Faling" message="random tweet 2" likes= "54"/>
      <Tweet name="Debbie"message="random tweet 3" likes= "98"/>
      <Tweet name="Amos"message="random tweet 4" likes= "10"/>
    </div>
  ); */
}
export default App;
