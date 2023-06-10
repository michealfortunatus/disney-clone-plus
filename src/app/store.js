// import { configureStore } from "@reduxjs/toolkit";
// import movieReducer from '../features/Movie/movieSlice';
// import userReducer from "../features/user/userSlice";

// const store = configureStore({
//     reducer: {
//         movie: movieReducer,
//         user: userReducer
//     }
// });

// export default store;

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/Movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
