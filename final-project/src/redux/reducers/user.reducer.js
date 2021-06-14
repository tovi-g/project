import createReducer from './reducerUtils';
// import keyBy from 'lodash';
import produce from 'immer'

const initialState = {
   user:[],
  
}

const userFunc = {
   setUser(state,action){
       state.user=action.payload
   },
   addUser(state,action){
       state.user.push(action.payload)
   }
}

export default produce((state, action) => createReducer(state, action, userFunc), initialState);
