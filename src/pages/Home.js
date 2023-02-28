import React from 'react'
import About from '../components/About'
import Title from '../components/Title'
//class component -day2 task
class Home extends React.Component{
  // constructor(){
  //   super()
  //   this.state={
  //     title:'shailee',
  //     description:'heya hello'
  //   }
  // }
  constructor(props){
    super(props)
    this.state={
      isLoggedIn:true
    }
  
}
 render(){
 
  
//   using if else
  if(this.state.isLoggedIn){
    return (
        <div>
          <Title heading="About page" />
          <p> <Title description="welcome to about page"/></p>
         
          <About/>
          </div>
    )
}
else{
    return <div>
      <Title heading="home page" />
      <p><Title description="welcome to home page"/></p>
      
      </div>
}
//using ternary operator
// return(
//   this.state.isLoggedIn ? <h1><About/></h1> : <h1>This is Home page</h1>
  
// )
//using shortcircuit method
// return(
//   this.state.isLoggedIn && <h1><About/></h1>
// )


    // return (
    //     <>
    //      {/* <h1>{this.state.title}</h1>
    //      <h1>{this.state.description}</h1> */}
    //       <Title heading={this.state.title} description={this.state.description} />
    //       {/* <Title heading="Hello"/>
    //       <Title heading="Ciao"/>
    //       <Title heading="Audios"/> */}
    //     </>
    //   )
 }
}

export default Home

