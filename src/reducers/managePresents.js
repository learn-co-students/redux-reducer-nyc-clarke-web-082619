export function managePresents(state, action={ type: "INCREASE"}){
    switch(action.type){
        case 'INCREASE': return {...state, numberOfPresents: state.numberOfPresents + 1};
        default:
            return state
    }
}
