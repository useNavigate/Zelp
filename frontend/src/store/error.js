const RECEIVE_ERROR = "errors/sendError";

export const receiveError = (errors) => {
  return {
    type: RECEIVE_ERROR,
    errors,
  };
};


export const sendError =(errors)=>async(dispatch)=>{
    const res = await fetch('/api/errors',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(errors)

    })
    const error = await res.json()
}

const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ERROR: {
      return { ...state, errors: action.errors };
    }
    default:
      return state;
  }
};

export default errorReducer
