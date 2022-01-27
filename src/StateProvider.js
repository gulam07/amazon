import React, { createContext,useReducer,useContext } from "react";


// Prepare DataLayer
export const StateContext = createContext();

//Wrap our App and provide the DataLayer
const StateProvider =({reducer,initialState,children}) => (
     <StateContext.Provider value = {useReducer(reducer,initialState)}>
         {children}

     </StateContext.Provider>
);

// Pull information from DataLayer
export const useStateValue = () => useContext(StateContext);


export default StateProvider;