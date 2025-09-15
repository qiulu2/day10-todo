export function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload.id);
        case "UPDATE_TODO":
            const newState = [...state];
            return newState.map((value) => {
                if (value.id === action.payload.id) {
                    return action.payload
                }
                return value
            })
        case "LOAD_TODOS":
            return action.payload;
        default:
            return state;
    }
}