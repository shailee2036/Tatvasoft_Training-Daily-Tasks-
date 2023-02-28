import React from 'react'
//functional component-day 2 task
function Title({title}) {
  return (
    <div>
    {/* <h1>{props.heading} {props.description}</h1> */}
    <h2>Id : {title.id}, Title: {title.title}, description:{title.decription} </h2>
    </div>
  )
}

export default Title
