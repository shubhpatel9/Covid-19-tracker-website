import logo from './logo.svg';
import './App.css';

import Counter from "./Components/Counter/Counter";


function App() {
  return (
    <div>
      <h1><center>COVID19 Data</center></h1>
      <Counter name={"Jacob"} counterValue={1}/>
      {/*<Counter state={this.} counterValue={0}/>*/}
      {/*this.NameForm.render()*/}
    </div>
  );
}

export default App;
