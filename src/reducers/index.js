import ACTION_TYPES from "../actions/actionTypes";
const initialState = {
  count: 0,
  step: 1,
  tasks:[
    {
      id:0,
      body:'test task',
      isDone: false
    }
  ]
};
let serial = 1;
function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK:{
      const {values} = action;
      const {tasks} = state;
      return {
        ...state,
        tasks: [...tasks, {...values, id:serial++}]
      }
    }
    case ACTION_TYPES.UPDATE_TASK:{
      const {id, values} = action;
      const {tasks} = state;
      const newTasks = tasks.map((task)=>{
        if(task.id===id){
          return {...task, ...values};
        }
        return task;
      })
      return {
        ...state,
        tasks: newTasks
      };
    }
    case ACTION_TYPES.DELETE_TASK:{
      return {
        ...state,
        tasks: state.tasks.filter((task)=>task.id!==action.id)
      }
    }
    case ACTION_TYPES.INCREMENT: {
      return {
        ...state,
        count: state.count + state.step,
      };
    }
    case ACTION_TYPES.DECREMENT: {
      return {
        ...state,
        count: state.count - state.step,
      };
    }
    case ACTION_TYPES.SET_STEP: {
      return {
        ...state,
        step: action.newStep,
      };
    }
    default:
      return state;
  }
}
export default reducer;