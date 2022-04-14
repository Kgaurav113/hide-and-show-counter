
import './App.css';
import Counter from './components/Counter';
import React from 'react';
function App() {

  
  const[ShowCount,setShowCount]=React.useState(true)
   return (
    <div className="App">
      <button onClick={()=>setShowCount(!ShowCount)}> {ShowCount?"Hide":"Show"}
       </button> {ShowCount&&<Counter/>}
      
     
    </div>

  );
}

export default App;
