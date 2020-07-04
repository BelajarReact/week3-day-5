const _OnSubstract = () => ({
    type: 'KURANGI'
})
const _OnAdd = () => ({
    type: 'TAMBAHKAN'
})

const nilai = 1;

export function incrementAsync() {


    return async (dispatch) => {


        setTimeout(() => {
            dispatch(_OnAdd());

        }, 200);
    }
}

export function decrementAsync() {

    return async (dispatch) => {

        setTimeout(() => {
            dispatch(_OnSubstract());

        }, 200);
    }
}




export function fetchTodos(counter) {
    return async (dispatch) => {
        const nilai = counter < 1 ? 1 :counter;
        const response = await  fetch('https://jsonplaceholder.typicode.com/todos/'+nilai);

        setTimeout(() => {
            dispatch({
                type: 'GET_DATA',
                payload: response.json()
            })

        }, 200);
    }
}