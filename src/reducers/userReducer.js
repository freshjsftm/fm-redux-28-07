import ACTION_TYPES from "../actions/actionTypes";
const initialState = {
  users:[],
  isFetching:false,
  error:null
}
function userReducer(state =initialState, action){
  switch(action.type){
    case ACTION_TYPES.CREATE_USER_REQUEST:{
      return {
        ...state,
        isFetching:true,
        error:null
      }
    }
    case ACTION_TYPES.CREATE_USER_SUCCESS:{
      const {values:user} = action;
      return {
        ...state,
        isFetching:false,
        error:null,
        users: [...state.users, user]
      }
    }
    case ACTION_TYPES.CREATE_USER_ERROR:{
      const {error} = action;
      return {
        ...state,
        isFetching:false,
        error
      }
    }
    default: return state;
  }
}

export default userReducer;