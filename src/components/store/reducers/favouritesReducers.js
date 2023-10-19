const favouritesReducer = (state = [], action) => {
switch (action.type) {
    case "ADD_TO_FAVOURITES":
        if(!state.find(obj=> obj.id === action.payload.id)){
        return [...state, action.payload];
        } else{
            return [...state];
        }
    case "REMOVE_FROM_FAVOURITES":
        let tempArr = state.filter((obj)=>obj.id !== action.payload.id)
        return [...tempArr];
    default:
        return state;
}
};

export default favouritesReducer;
