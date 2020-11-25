import React, {useState, useEffect} from 'react';

import axios from 'axios';


const Counter = (props) => {

    const [counter, setCounter] = useState(0);
    const [alert, setAlert] = useState(false);

    const [COVIDdata, setCOVIDdata] = useState(0);

    const y = 'Enter a State(in its initials): '; 

    const link = 'https://api.covidtracking.com/v1/states/daily.json';

    const getData = (link) => {
        const config = {
            header: {
                'Content-Type':'application/json'
            }
        }

        axios.get(link, config).then((res) => {
            console.log(res.data)
            setCOVIDdata(res.data);
            setAlert(true)
        })

    }

    const showAlert = (counter) => {
        if (counter === 3) {
            setAlert(true)
        }
    }

    useEffect(() => {
        console.log('Just Loaded!')
        getData(link)
    }, [])

    useEffect(() => {
        console.log('counter updated! New Value: ', counter)
        showAlert(counter);
    }, [counter])
    {/*class NameForm extends React.Component {
        constructor(props) {
          super(props);
          this.state = {value: ''};
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChange(event) {    this.setState({value: event.target.value});  }
        handleSubmit(event) {
          alert('A name was submitted: ' + this.state.value);
          event.preventDefault();
        }
      
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
              <input type="submit" value="Submit" />
            </form>
          );
        }
      }  */}

    return (
      <div>
        <h1>{y}</h1>
        {/*<h1>{`my name is ${props.name}`}</h1>*/}
        {/*<div>{NameForm.render}</div>*/}

        <input />
        <button onClick={() => setCounter(counter + 1)}>Submit</button>     
   
        {
            alert ? 
                <div>{COVIDdata[0].date}</div>
            :
                <></>
        }
      </div>
    )
}
const UserInput = props => {
    return(
        <div>
            <h1>yolo</h1>
            <form onSubmit={props.onSubmit}>
                <input type="text" value={props.state} onChange={props.setState}/>
                <input type="submit" value="Submit"/>

            </form>
        </div>
    )
}; 
 

export default Counter;