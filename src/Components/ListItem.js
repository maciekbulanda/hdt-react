import React from 'react'
import * as classes from './ListItem.module.css'

const ListItem = (props) => {

    let date = (new Date(props.element.readingTime)).toLocaleDateString()
    let time = (new Date(props.element.readingTime)).toLocaleTimeString()

    return (
        <div style={{marginTop: '10px'}}>
            <div style={{width: '30px'}} className={classes.item}>{props.index}</div>
            <div style={{width: '82px'}} className={classes.item}>{date}</div>
            <div style={{width: '68px'}} className={classes.item}>{time}</div>
            <div style={{width: '40px'}} className={classes.item}>{props.element.readingValue}</div>
        </div>
    )
}

export default ListItem