import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json)
    .then((data) => data);
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.loading = false;
      state.posts = [];
    });
  },
});

export default postSlice.reducer;

// export const fetchTodos = createAsyncThunk{
//     'todos/fetchTodos',
//     async function(){
//         const response = await fetch('https://633db5337e19b17829149247.mockapi.io/sneakers/sneakers');

//         const data = await response.json();
//         return data;
//     }
// };

// const todoSlice = createSlice({
//     name:'todos',
//     initialState:{
//         todos: [],
//         status: null,
//         error: null
//     }
//     extraReducers: (builder) => {
//            builder.addCase(fetchUsers.pending, (state) => {
//               state.loading = true;
//             });
//             builder.addCase(fetchUsers.fulfilled, (state, action) => {
//               state.loading = false;
//               state.users = action.payload;
//               state.error = "";
//             });
//             builder.addCase(fetchUsers.rejected, (state, action) => {
//               state.loading = false;
//               state.users = [];
//               state.error = action.error.message;
//             });
//           },

// })

// const initialState = {
//   posts: [],
//   status: 'idle',
//   error: null
// }

// export const fetchPosts = createAsyncThunk('posts/fetchPosts', () => {
//     fetch("https://rickandmortyapi.com/api/character")
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch(console.error)
// })

// const postsSlice = createSlice({
//     name: 'posts',
//     initialState,
//     reducers: {
//       postAdded: {
//         reducer(state, action) {
//           state.posts.push(action.payload)
//         },
//         prepare(title, content, userId) {
//           // omit prepare logic
//         }
//       },
//       reactionAdded(state, action) {
//         const { postId, reaction } = action.payload
//         const existingPost = state.posts.find(post => post.id === postId)
//         if (existingPost) {
//           existingPost.reactions[reaction]++
//         }
//       },
//       postUpdated(state, action) {
//         const { id, title, content } = action.payload
//         const existingPost = state.posts.find(post => post.id === id)
//         if (existingPost) {
//           existingPost.title = title
//           existingPost.content = content
//         }
//       }
//     }
//   })

//   export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

//   export default postsSlice.reducer

//   export const selectAllPosts = state => state.posts.posts

//   export const selectPostById = (state, postId) =>
//     state.posts.posts.find(post => post.id === postId)

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   loading: false,
//   users: [],
//   error: "",
// };

// export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
//   return axios
//     .get("https://633db5337e19b17829149247.mockapi.io/sneakers/sneakers")
//     .then((response) => response.data);
// });

// const fetchSlice = createSlice({
//   name: "data",
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(fetchUsers.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchUsers.fulfilled, (state, action) => {
//       state.loading = false;
//       state.users = action.payload;
//       state.error = "";
//     });
//     builder.addCase(fetchUsers.rejected, (state, action) => {
//       state.loading = false;
//       state.users = [];
//       state.error = action.error.message;
//     });
//   },
// });

// export default fetchSlice.reducer;
