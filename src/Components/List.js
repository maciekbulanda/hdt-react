import React, {useState, useEffect} from 'react'
import * as util from '../utils'
import ListItem from './ListItem'
import * as classes from './List.module.css'

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
            {readings.map((el, i) => (<ListItem index={i+1} element={el}/>))}
        </div>
    )
}

export default List