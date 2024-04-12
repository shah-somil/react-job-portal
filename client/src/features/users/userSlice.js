// // src/features/users/userSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Asynchronous thunk for user login
// export const loginUser = createAsyncThunk('users/loginUser', async (userCredentials, { rejectWithValue }) => {
//   try {
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userCredentials),
//     });
//     const data = await response.json();
//     if (!response.ok) throw new Error(data.message || 'Could not log in');
//     return data;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });

// const userSlice = createSlice({
//   name: 'users',
//   initialState: {
//     loggedIn: false,
//     userDetails: null,
//     users: [],
//     status: 'idle',
//     error: null
//   },
//   reducers: {
//     logout: (state) => {
//       state.loggedIn = false;
//       state.userDetails = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loggedIn = true;
//         state.userDetails = action.payload;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.error = action.payload;
//       });
//   }
// });

// export const { logout } = userSlice.actions;

// export default userSlice.reducer;


// src/features/users/userSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//     const response = await axios.get('/api/users'); // Use the correct endpoint
//     return response.data;
//   });

// export const loginUser = createAsyncThunk(
//   'users/loginUser',
//   async (userCredentials, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/api/users/login', userCredentials);
//       if (response.data) {
//         localStorage.setItem('token', response.data.token); // Storing the token
//         return {
//           email: userCredentials.email,
//           role: response.data.role  // Assuming the API returns a role
//         };
//       }
//     } catch (error) {
//         return rejectWithValue(error.response ? error.response.data : 'Unexpected error');
//     }
//   }
// );


// const userSlice = createSlice({
//   name: 'users',
//   initialState: {
//     userDetails: loadState()?.userDetails || null,
//     users: [],
//     loginStatus: 'idle',
//     error: null
//   },
//   reducers: {
//     logout(state) {
//       state.userDetails = null;
//       localStorage.removeItem('user'); 
//     },
//     setUserDetails(state, action) {
//         state.userDetails = action.payload;
//     }
  
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loginStatus = 'loading';
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.userDetails = action.payload;
//         localStorage.setItem('user', JSON.stringify(action.payload));

//         ;state.loginStatus = 'succeeded';
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loginStatus = 'failed';
//         state.error = action.payload;
//       })
//   }
// });


  
  

// export const { logout } = userSlice.actions;
// export default userSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Load user details from localStorage
function loadUserDetails() {
  try {
    const serializedState = localStorage.getItem('user');
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Failed to load user', err);
    return null;
  }
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('/api/users');
  return response.data;
});

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/users/login', userCredentials);
      if (response.data) {
        localStorage.setItem('token', response.data.token); // Storing the token
        localStorage.setItem('user', JSON.stringify({ email: userCredentials.email, role: response.data.role }));
        return {
          email: userCredentials.email,
          role: response.data.role // Assuming the API returns a role
        };
      }
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : 'Unexpected error');
    }
  }
);

const initialState = {
  userDetails: loadUserDetails(),
  users: [],
  loginStatus: 'idle',
  error: null
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logout(state) {
      state.userDetails = null;
      localStorage.removeItem('token'); // Clear token from localStorage
      localStorage.removeItem('user'); // Clear user details from localStorage
    },
    setUserDetails(state, action) {
      state.userDetails = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload)); // Store user details in localStorage
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginStatus = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userDetails = action.payload;
        state.loginStatus = 'succeeded';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginStatus = 'failed';
        state.error = action.payload;
      });
  }
});

export const { logout, setUserDetails } = userSlice.actions;
export default userSlice.reducer;
