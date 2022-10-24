import { useDispatch, useSelector } from "react-redux"

export default function Counter(){
    
    const count = useSelector(state => state.count)
    const dispatch = useDispatch();

    const add = ()=>{
        dispatch({
            type: 'inc'
        })
    };

    const minus = ()=>{
        dispatch({
            type : 'dec'
        })
    };


    
    return (
        <>
        <div className="container m-5 ">
            <h2 className="text-center">{count}</h2>
            <div className="btn-handler">
            <button className="btn btn-success" onClick={add}>increase</button>
            <button className="btn btn-danger" onClick={minus}>decrease</button>
            </div>
        </div>
        
        
        
        
        
        
        </>
    )
}