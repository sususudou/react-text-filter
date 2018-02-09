import React from 'react'
export const Item = (props) =>
    <div key={props.id}>
        <span>{props.children}</span>
    </div>