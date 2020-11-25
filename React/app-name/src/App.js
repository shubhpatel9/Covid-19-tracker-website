import logo from './logo.svg';
import './App.css';

import Counter from "./Components/Counter/Counter";

function App() {
  return (
    <div>
      <h1>COVID19 Data</h1>
      <Counter name={"Jacob"} counterValue={1}/>
      <Counter name={"Luke"} counterValue={10}/>
      <Counter name={"Shubh"} counterValue={-9}/>
    </div>
  );
}

export default App;
