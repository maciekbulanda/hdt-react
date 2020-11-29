import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import * as util from '../utils'

const List = () => {
    let [readings, setReadings] = useState([])

    useEffect(() => {
        util.connection.get("/").then((resp) => {
            console.log(resp.data)
        })
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default List