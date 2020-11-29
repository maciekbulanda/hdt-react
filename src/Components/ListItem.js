import React from 'react'
import * as classes from './ListItem.module.css'

const ListItem = (props) => {
    return (
        <div>
            <div className={classes.item}>{props.index}</div>
            <div className={classes.item}>{props.element.readingTime}</div>
            <div className={classes.item}>{props.element.readingValue}</div>
        </div>
    )
}

export default ListItem