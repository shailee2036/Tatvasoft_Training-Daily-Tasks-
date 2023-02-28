import React from 'react'
import Title from './Title'

function List() {
    // const names=["Shailee","Sweeto","Purvi","Krisha"]
    // const nameList= names.map(name => <h2>{name}</h2>)
    const arr =[ 
        {
            id:1,
            title:"abc",
            decription:"fafafaaf"
        },
        {
            
            id:2,
            title:"def",
            decription:"tattaatta"
        }
    
]
const arrList = arr.map(title => <Title key={title.id} title={title} />)
  return (
    <div>
     {/* {nameList} */}
     {arrList}
    </div>
  )
}

export default List
