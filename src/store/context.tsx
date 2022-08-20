import React, { useReducer } from 'react'
import { context as ContextWrapper, defaultState, reducer, TState, TActions } from './state';

const Context = ({ children }) => {

    const [state, dispatch] = useReducer<React.Reducer<TState, TActions>>(reducer, defaultState)

    return <ContextWrapper.Provider value={{ state, dispatch }}>
        {children}
    </ContextWrapper.Provider>
}

export default Context;