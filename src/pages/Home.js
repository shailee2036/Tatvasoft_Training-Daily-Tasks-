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
      isLoggedIn:false
    }
}
 render(){
  <p>This is Home Page</p>
  //using if else
//   if(this.state.isLoggedIn){
//     return (
//         <div><About/></div>
//     )
// }
// else{
//     return <div>Get lost</div>
// }
//using ternary operator
return(
  this.state.isLoggedIn ? <h1><About/></h1> : <h1>This is Home page</h1>
)
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

