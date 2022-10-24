import React from "react";

class Event extends React.Component{
  constructor(){
    super()
    this.state = {
      number : 0,
      littleNumbers : [
       {
        num1: 10 ,
        num2: 10
      },
      {
        num3 : 5,
        num4 : 5
      }

      ]
    }

    this.adderBig= this.adderBig.bind(this)
    this.adderSmall= this.adderSmall.bind(this)
  };

  adderBig(){
    this.setState((prev)=>{
      return {number : prev.number + 1}
    })
  }
  adderSmall(){
    this.setState((prev )=>{
      return {number : prev.littleNumbers[0].num1 + 1}
    })
  }

  render(){
    return(
      <>
      <div className="container mt-5 ">
        <div className="row">
          <h1 className="text-center">{this.state.number}</h1>
          <div className="btn-handler m-3">
            <button className="btn btn-primary" onClick={this.adderBig}>Add</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h1 className="text-center">{this.state.littleNumbers[0].num1}</h1>
            <div className="btn-handler m-3">
              <button className="btn btn-danger" onClick={this.adderSmall}>Add</button>
            </div>
          </div>
          <div className="col">
            <h1 className="text-center">{this.state.littleNumbers[0].num2}</h1>
            <div className="btn-handler m-3">
              <button className="btn btn-danger">Add</button>
            </div>
          </div>
          <div className="col">
            <h1 className="text-center">{this.state.littleNumbers[1].num3}</h1>
            <div className="btn-handler m-3">
              <button className="btn btn-danger">Add</button>
            </div>
          </div>
          <div className="col">
            <h1 className="text-center">{this.state.littleNumbers[1].num4}</h1>
            <div className="btn-handler m-3">
              <button className="btn btn-danger">Add</button>
            </div>
          </div>
        </div>
      </div>
      
      
      
      
      </>
    )
  }
}

export default Event