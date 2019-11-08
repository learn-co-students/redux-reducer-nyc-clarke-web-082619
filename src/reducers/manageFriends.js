export function manageFriends(state, action){

    switch(action.type){
        case 'ADD_FRIEND' :
            let newFriends = [...state.friends]
            return {friends: [...newFriends, action.friend]}
        case 'REMOVE_FRIEND' :
            let oldFriends = [...state.friends]
            return {friends: [...oldFriends.filter(friend => friend.id !== action.id)]}
            // return oldFriends
        default:
            return state
    }
}
