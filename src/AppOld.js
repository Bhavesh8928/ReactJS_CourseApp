// CODE = App.js

import logo from './logo.svg';
import './App.css';
import Header from "./Components/HeaderOld"

function App() {
  return (
    <div>
      <Header card = "First card" title= "Book header" />   
      <hr /> 
      <Header card = "Second card" title = "Movie header"/>  {/* Header is Reusable component */}      
      <h1>This is my react JS application</h1>
      <hr />
      <Header card = "Third Header" title = " Shooting header"/>
    </div>
  );
}

export default App;

