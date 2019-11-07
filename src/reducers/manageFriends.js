export function manageFriends(state, action){
}

let state = { friends: []}
let action = {
    type: "ADD_FRIEND",
    friend: {
        name: "Chrome Boi",
        hometown: "NYC",
        id: 1
    }
}



function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND':
            return (
                {...state, friends: [...state.friends, action.friend]}
            )
        case 'REMOVE_FRIEND':
            return (
                {...state, friends: [...state.friends.filter(friend => friend.id !== action.id)]}
            )
        default: return state
    }
}
