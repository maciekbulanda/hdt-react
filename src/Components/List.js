import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import * as util from '../utils'
import ListItem from './ListItem'

const List = () => {
    let [readings, setReadings] = useState([])

    useEffect(() => {
        util.connection.get("/api/tempreading").then((resp) => {
            setReadings(resp.data)
            console.log(resp.data)
        })
    }, [])

    return (
        <div>
            {readings.map(el => (<ListItem element={el}/>))}
        </div>
    )
}

export default List