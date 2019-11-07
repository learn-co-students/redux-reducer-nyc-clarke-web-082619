export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      let friends = [...state.friends];
      friends.push(action.friend);
      return { friends: friends };
    case "REMOVE_FRIEND":
      let friends2 = [...state.friends];
      friends2 = friends2.filter(friend => {
        return friend.id !== action.id;
      });
      return { friends: friends2 };
    default:
      return { friends: state.friends };
  }
}
