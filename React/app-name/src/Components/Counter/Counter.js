import React, {useState, useEffect} from 'react';

import axios from 'axios';

const Counter = (props) => {

    const [counter, setCounter] = useState(0);
    const [alert, setAlert] = useState(false);

    const [COVIDdata, setCOVIDdata] = useState(0);

    const y = 'Coming from Counter.js';
    const p = 'Shubham';

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

    return (
      <div>
        <h1>{y}</h1>
        <h3>{`my name is ${props.name}`}</h3>
        <p>Counter: {counter}</p>
        {alert ? 
            <h1>You Won!</h1>
            :
            <></>
        }
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
        {
            alert ? 
                <div>{COVIDdata[0].date}</div>
            :
                <></>
        }
      </div>
    )
}

export default Counter;