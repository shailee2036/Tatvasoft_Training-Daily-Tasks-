import React from 'react'
import Title from '../components/Title'
//class component -day2 task
class Home extends React.Component{
  constructor(){
    super()
    this.state={
      title:'shailee',
      description:'heya hello'
    }
  }
  
 render(){
    return (
        <>
         {/* <h1>{this.state.title}</h1>
         <h1>{this.state.description}</h1> */}
          <Title heading={this.state.title} description={this.state.description} />
          {/* <Title heading="Hello"/>
          <Title heading="Ciao"/>
          <Title heading="Audios"/> */}
        </>
      )
 }
}

export default Home

