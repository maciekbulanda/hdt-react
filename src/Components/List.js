import React, {useState, useEffect} from 'react'
import * as util from '../utils'
import ListItem from './ListItem'
import * as classes from './List.module.css'
import '../common.css'

const List = () => {
    let [readings, setReadings] = useState([])

    useEffect(() => {
        util.connection.get("/api/tempreading").then((resp) => {
            setReadings(resp.data)
            console.log(resp.data)
        })
    }, [])

    let content = (
        <i className="loading"/>
    )

    if (readings.length > 0) {
        content = readings.map((el, i) => (<ListItem index={i+1} element={el}/>))
    }

    return (
        <div className={classes.list}>
            {content}
        </div>
    )
}

export default List