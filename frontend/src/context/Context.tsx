import React, { Dispatch, useReducer } from "react";

    type UserType ={
        username:string,
        email:string, 
    }

interface ParlourState {
    user: UserType | null; // Assuming UserType is a type you've defined somewhere
    refresh:boolean;
  }
  

const initialState:ParlourState = {
    user: null,
    refresh:false,

}
type ParlourContextValue ={
    state: ParlourState;
    dispatch: Dispatch<any>; // Assuming ParlourAction is a type you've defined somewhere
  }


  export const ParlourContext = React.createContext<ParlourContextValue | undefined>(undefined);

const ParlourReducer = (state=initialState,action:any)=>{

    switch (action.type) {
        case "addUser":
            return {...state, user:action.payload}

        case "removeUser":
                return {...state, user:null}

        case "setRefresh":
            return {...state,refresh:!state.refresh}

        default:
            return state
    }


}
type parlourContextProviderType = {
    children:React.ReactNode
}
export const ParlourContextProvider:React.FC<parlourContextProviderType> = ({children})=>{
    const [state, dispatch] = useReducer(ParlourReducer, initialState)

    return(

        <ParlourContext.Provider value={{state:state,dispatch}}>{children}</ParlourContext.Provider>

    ) 
}