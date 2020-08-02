import React from 'react'

interface IHelloProps {
    message?: string;
}
// 1. 自动补全
// 2. 可以自动验证
const Hello: React.FC<IHelloProps> = (props) => {
    return <h2>{props.message}</h2>
}

Hello.defaultProps = {
    message: "Hello World"
}

export default Hello