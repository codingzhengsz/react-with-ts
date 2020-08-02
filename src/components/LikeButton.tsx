import React, { useState, useEffect } from 'react'

// useStateHook
// Hook: 能在React函数组件中勾入React特性
const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    useEffect(() => {
        console.log('docuement title effect is running')
        document.title = `点击了${like}次`
    }, [like, on])
    return (
        <>
            <button onClick={() => { setLike(like + 1) }}>
                {like} 👍
            </button>
            <button onClick={() => { setOn(!on) }}>
                {on ? 'On' : 'Off'}
            </button>
        </>
    )
}

export default LikeButton