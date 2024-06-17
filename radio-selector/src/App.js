
import './App.css';

import ButtonScreen from './ButtonScreen';

function App() {


  

  return (
    <div className="App">

        <br/>
        <h1>Select File Type</h1>
     
        <div style={{margin: "0 auto", justifyContent: "center", alignItems: "center", display: "flex", border: "1px solid blue", width: "50%"}}>

          <ButtonScreen/>

        </div>
      
    </div>
  );
}

export default App;
