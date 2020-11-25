import React, {useState, useEffect} from 'react';

import axios from 'axios';


const Counter = (props) => {

    const [counter, setCounter] = useState(0);
    const [alert, setAlert] = useState(false);
    const [dateValue, setDateValue] = useState('');

    const [COVIDdata, setCOVIDdata] = useState(0);

    const y = 'Enter a State(in its initials): '; 

    const link = 'https://api.covidtracking.com/v1/us/daily.json';

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
            console.log('incoming date length: ')
            {/*checkDate('1',res.data)*/}
        })

    }


    const checkDate = (date, secondDate, covidData) => {
        covidData.forEach(idx => {
            if(idx.date > (date - 1) && idx.date < secondDate){
                console.log(idx)
            }
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

    useEffect(() => {
        console.log('counter updated! New Value: ', dateValue)
    }, [dateValue])

    const submit = (e) => {
        e.preventDefault();
        let date = e.target.date.value
        console.log('pre-removing string: ', date);
        date = date.replace(/-/g,'')
        console.log('post-removing string: ', date);
        date = parseInt(date,10)
        setDateValue(date);
    }

    return (
      <div>
        <h1>{y}</h1>
        {/*<h1>{`my name is ${props.name}`}</h1>*/}
        {/*<div>{NameForm.render}</div>*/}
        {/* Form for user to input state */}
        {/*<form onSubmit={props.onSubmit}>
            <input type="text" value={props.state} onChange={props.setState}/>
            <input type="submit" value="Submit"/>
    </form>*/}
        <div>Form for use</div>
        <form onSubmit={submit}>
            <input name="date" type="date" placeholder="date, ex20201125"/>
            <input name="date" type="date" placeholder="date, ex20201125"/>         
            <button type="submit" onClick>yolo</button>
        </form>


        <input />
        <button onClick={() => setCounter(counter + 1)}>Submit</button>     
   
        {
            alert ? 
                <div>Date: {COVIDdata[0].date}</div>
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