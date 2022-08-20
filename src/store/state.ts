import React, { createContext } from 'react'

type actionType = 'changeState'


export interface TState {
    activeIndex: number
}

export interface TActions {
    type: actionType,
    payload: any
}


export const defaultState: TState = {
    activeIndex: 0
}

export const reducer: React.Reducer<TState, TActions> = (state = defaultState, action: TActions) => {
    switch (action.type) {
        case "changeState":

            return { ...state, ...action.payload }

        default:
            return state;
    }
}

export interface TContext {
    state: TState,
    dispatch: React.Dispatch<TActions>
}

export const context = createContext({} as TContext);