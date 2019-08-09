import {createStore} from 'redux'


//initial state
const initialState = {
name:'',
address:'',
city:'',
state:'',
zipcode:''
}

//action constant

export const UPDATE_NAME = 'UPDATE_NAME'






//reducer
function reducer(state = initialState, action){
    let {payload} = action
    //switch is just an if statement with additional rules
    switch (action.type){
        case UPDATE_NAME:
            return {...state, name:payload}

            
        default: return state
    }
}

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
