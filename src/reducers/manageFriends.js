export function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND': 
        return { ...state, friends: state.friends.concat(action.friend)};
        case 'REMOVE_FRIEND':
            let newFriends = state.friends.map(friend => {
               if (friend.id != action.id){
                   return friend
               } else {
                   return null;
               }
            });
            newFriends = newFriends.filter(friend => friend);
            return {...state, friends: newFriends}
        default: return state
    }
}
