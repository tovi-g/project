import createReducer from './reducerUtils';

import produce from 'immer'

const initialState = {
   user:[],
   selectedUser:{}
  
}

const userFunc = {
   setUser(state,action){
       state.user=action.payload
   },
   setSelectedUser(state,action){
    state.selectedUser=action.payload
},
   addUser(state,action){
       state.user.push(action.payload)
   }
}

export default produce((state, action) => createReducer(state, action, userFunc), initialState);
