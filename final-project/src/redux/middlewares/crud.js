
import userService from "../../services/user.service";
import { actions } from "../Action";


export const getUsersFromServer =  ({ dispatch, getState }) => next => action => {
async function getUsers(){
     const users = await userService.getAll();
            dispatch(actions.setUser(users))
}
    if (action.type === 'SET_USERS_FROM_SERVER') {
        try {
            getUsers();
        } catch (err) {
            console.log(err);
        }
    }
    return next(action)
}