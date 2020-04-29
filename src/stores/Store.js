import { createStore } from 'redux';
import { repositoryReducer } from './reducers/store';

const initialState = {
  selectedRepositoryIds: [],
};

export const store = createStore(repositoryReducer, initialState);