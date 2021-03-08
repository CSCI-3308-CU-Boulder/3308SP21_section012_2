import { STORE_TOKEN } from './actions'

const InitialState = 
{

}

export default function(state = InitialState, action){
    const {type} = action
    switch(type){
        case STORE_TOKEN:{
            const {token} = action 
            return {
                ...state,
                token
            }
        }
        default:{
            return state;
        }
    }
}