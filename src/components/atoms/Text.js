import React from 'react'

export const Text = (props) =>
    <div>
        <input type="text" onChange={(trg)=>props.func(trg.target.value,props.parentRef)}/>
    </div>