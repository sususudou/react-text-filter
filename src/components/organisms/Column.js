import React from 'react'
import { ItemList } from "../molecues/ItemList"
import { Text } from "../atoms/Text"
export class Column extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input: null,
            list: [{id: 1,
                    message: "おはよう"},
                {
                    id: 2,
                    message: "こんにちは"
                }, {
                    id: 3,
                    message: "こんばんは"
                }, {
                    id: 4,
                    message: "おはよう"
                }
            ]
        }
    }

    connectChildFormToThis(childValue,self){
        self.setState({
            ...self.state,
            input:childValue,
        })
    }

    filterByText(list,ruleString = ''){
        if(ruleString === '') return list
        return list.filter(item=>{
            return (item.message.includes(ruleString))
        })
    }
    
    render(){
        return(
            <div className="column">
                <Text func={this.connectChildFormToThis} parentRef={this} />
                {(this.state.input) ? `「${this.state.input}」を含むItem` : '全件表示'}
                <ItemList 
                    list={this.state.list}
                    rule={this.filterByText}
                    ruleString={this.state.input}
                />
            </div>
        )
    }
} 