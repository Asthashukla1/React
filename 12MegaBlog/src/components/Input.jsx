import React from "react";

const Input = React.forwardRef(function Input(
    {label,
    type = 'text' ,
    className = '',
    input,
    ...props
    }, ref){
    return <h1>my personal input box</h1>
})

export default Input