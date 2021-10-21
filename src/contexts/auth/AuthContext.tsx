import React, { useReducer } from 'react';
import actionCreator from '../utils/actionCreater';

const login = actionCreator('LOGIN');
const loginError = actionCreator('LOGIN_ERROR');
const loginSuccess = actionCreator('LOGIN_SUCCESS');

const initialState = {
    login: {
        error: null,
        loading: false,
    },
    isAuthenticated: false
};

const actions = {
    login,
    loginError,
    loginSuccess
}

type Actions = typeof actions

export type AuthAction = {
    type: string;
    payload: any;
}

export type AuthState = typeof initialState

export type Dispatch = (action: AuthAction) => void

const AuthContext = React.createContext<{ state: AuthState, actions: Actions, dispatch: Dispatch } | undefined>(undefined);

function authReducer(state: AuthState, action: AuthAction) {
    const { type, payload } = action;

    switch (type) {
        case 'LOGIN':
            return {
                ...state,
                login: {
                    error: null,
                    loading: true,
                },
                isAuthenticated: false
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                login: {
                    error: null,
                    loading: false,
                },
                isAuthenticated: true
            };
        case 'LOGIN_ERROR':
            const { error } = payload;
            return {
                ...state,
                login: {
                    error: error,
                    loading: false,
                },
                isAuthenticated: false
            };
        default:
            throw new Error();
    }
}

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider
            value={{ state, actions, dispatch }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthProvider`);
    }
    return context;
}

export { AuthProvider, useAuth };