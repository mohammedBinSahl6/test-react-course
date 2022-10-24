import React from "react";

class Event extends React.Component{
  constructor(){
    super()
    this.state = {
      number : 0,
    
        num1: 0 ,
        num2: 10
      ,
      
        num3 : 5,
        num4 : 5
      

      
    }

    this.adderBig= this.adderBig.bind(this)
    this.adderSmall= this.adderSmall.bind(this)
    this.adderSmall2= this.adderSmall2.bind(this)
    this.adderSmall3= this.adderSmall3.bind(this)
    this.adderSmall4= this.adderSmall4.bind(this)
    
  };

  adderBig(){
    this.setState((prev)=>{
      return {number : prev.number + 1}
    })
  };

  adderSmall(){
    this.setState((prev )=>{
      return { num1 : prev.num1 + 10}
    })
  }
  adderSmall2(){
    this.setState((prev )=>{
      return { num2 : prev.num2 + 13}
    })
  }
  adderSmall3(){
    this.setState((prev )=>{
      return { num3 : prev.num3 + 10}
    })
  }
  adderSmall4(){
    this.setState((prev )=>{
      return { num4 : prev.num4 + 10}
    })
  }
 
  render(){
    return(
      <>
      <div className="container mt-5 ">
        <div className="row">
          <h1 className="text-center " >{this.state.number}</h1>
          <div className="btn-handler m-3">
            <button className="btn btn-primary" onClick={this.adderBig}><i className='bx bx-plus-circle'></i></button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h1 className="text-center">{this.state.num1}</h1>
            <div className="btn-handler m-3">
              <button className="btn btn-danger" onClick={this.adderSmall}><i className='bx bx-plus-circle'></i></button>
            </div>
          </div>
          <div className="col">
            <h1 className="text-center">{this.state.num2}</h1>
            <div className="btn-handler m-3">
              <button className="btn btn-danger"onClick={this.adderSmall2}><i className='bx bx-plus-circle'></i></button>
            </div>
          </div>
          <div className="col">
            <h1 className="text-center">{this.state.num3}</h1>
            <div className="btn-handler m-3">
              <button className="btn btn-danger" onClick={this.adderSmall3}><i className='bx bx-plus-circle'></i></button>
            </div>
          </div>
          <div className="col">
            <h1 className="text-center">{this.state.num4}</h1>
            <div className="btn-handler m-3">
              <button className="btn btn-danger" onClick={this.adderSmall4}><i className='bx bx-plus-circle'></i></button>
            </div>
          </div>

          <button className='btn btn-warning m-5 dds' >change me</button>
        </div>
      </div>
      
      
      
      
      </>
    )
  }
}

export default Event