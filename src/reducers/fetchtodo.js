
function  todos(state,action){
    if (typeof state === 'undefined') {
        return ''
    }
    if (action.type ==='GET_DATA'){
        return  action.payload;
    }

    return action
}

export default todos;