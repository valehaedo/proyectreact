import React, { useState } from "react";
import Tweet from "./Tweet";



function App() {
 const [users, setUsers] = useState([
   {name:"Susy", message: "We need to clean everithing" },
   {name:"Juanu", message: "We need to program everithing" },
   {name: "Vale", message: "We need to do what we need to do"}
 ])
  
  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );

};

export default App; 