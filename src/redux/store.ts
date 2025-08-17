import { configureStore } from '@reduxjs/toolkit'
import fileTreeReducer from './reducers/fileTreeSlice'

export const store = configureStore({
  reducer: {
    fileTree: fileTreeReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch