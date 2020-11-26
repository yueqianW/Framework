import React, { useState, useEffect } from 'react'

const LikeButton = () => {
  // const [like, setLike] = useState(0)
  const [obj, setObj] = useState({ like: 0, on: true })
  useEffect(() => {
    document.title = `click ${obj.like} times`
  })
  return (
    <div>
      <button onClick={() => {
        console.log(obj.like)
        setObj({ like: obj.like + 1, on: obj.on })
        // setLike(obj.like + 1)
      }}>{obj.like} 👍
      </button>
      <button onClick={() => {
        setObj({ on: !obj.on, like: obj.like })
      }}>{obj.on ? "ON" : "OFF"}</button>
    </div>
  )
}

export default LikeButton;