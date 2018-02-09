import React ,{Component} from 'react'
import {Item} from '../atoms/Item' 
export const ItemList = (props)=>{
    let list = (props.rule && props.ruleString) ? props.rule(props.list, props.ruleString) : props.list
    return(
        <div className="ItemList">
        {
            list.map(item => <Item key={item.id}>{item.message}</Item>)
        }
        </div>)
}