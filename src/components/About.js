import Myname from "./Myname";

function About(props){
    const redHead = {
        color : 'red',
        textAlign : 'center',
        fontSize : '40px',
        transition:'0.3s!important'
    } 
    let bool =true 
   
    
    return (
            <>
            <div className="container mt-5 p-3 " id="about">
                <div className="row">
                    <h1 className="text-center head">About Me</h1>
                </div>

                <div className="row">
                    <h2 className="myname" style={redHead} >My name is {<Myname name='Mohammed' /> }</h2>
                </div>

                <div className="row">
                    <h1  >{props.head}</h1>
                  
                    <p>lote my things about this is just a paragraphlote my things about this is just a paragraphlote my things about this is just a paragraphlote my things about this is just a paragraph</p>
                </div>
            </div>
            
            
            
            
            
            </>
        )
}

export default About;