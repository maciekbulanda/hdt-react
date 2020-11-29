import React from 'react'
import * as classes from './ListItem.module.css'

const ListItem = (props) => {
    return (
        <div style={{marginTop: '5px'}}>
            <div style={{width: '30px'}} className={classes.item}>{props.index}</div>
            <div style={{width: '200px'}} className={classes.item}>{props.element.readingTime}</div>
            <div style={{width: '40px'}} className={classes.item}>{props.element.readingValue}</div>
        </div>
    )
}

export default ListItem