import { inc, dec } from "../actions/types"

const counterReducer = (state={count : 0} , action)=>{
    switch (action.type){
        case inc :
            return {...state , count :state.count + 1 };
        case dec :
            return {...state , count : state.count - 1};
        default :
        return state        
    }
}
export default counterReducer