// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import jobReducer from '../features/jobs/jobSlice';

// Function to load state from localStorage
function loadState() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;  // No state in localStorage
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    users: userReducer,
    jobs: jobReducer,
  },
  preloadedState: persistedState,
});

// Function to save state to localStorage
function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.error('Could not save state', e);
  }
}

// Subscribe to store changes
store.subscribe(() => {
  // You might want to selectively persist parts of the state, for example:
  saveState({
    users: store.getState().users
    // Add other parts of the state if necessary
  });
});
