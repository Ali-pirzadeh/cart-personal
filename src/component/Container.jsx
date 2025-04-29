import React from 'react'

function Container({children}) {
  return (
      <div className=" mx-auto container px-5">{ children }</div>
  )
}

export default Container