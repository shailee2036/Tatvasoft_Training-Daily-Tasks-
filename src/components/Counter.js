import React from 'react'

class Counter extends React.Component {
    constructor(){
        super()
        this.state={
          count:0
        }
      }

      increment(){
        this.setState({
        count:this.state.count+1
        }) 
      }
      render() {
        return (
            <>
           <div> count - {this.state.count}</div>
           <button onClick={()=>this.increment()}>Increment</button>
            </>
   
            );

      }
 
}

export default Counter
