import data from "./pages/API/data.json";
import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";

const startState = {
    cards: [],
}

export const initialCards = () => {
    return {
        type: 'INITIALCARDS',
        cards: data,
    }
}

export const addItem = (item) => {
    return {
        type: 'ADD',
        item,
    }
}

//reducer

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALCARDS':
            return {
                cards: action.cards
            }
        case 'ADD': 
            return {
                ...state,
                cards: [...state.cards, action.item]
            };
        default:
            return state;
    }
}

const store = (initialState = startState) => {
    return createStore(reducer, initialState)
}

export const initStore = createWrapper(store);