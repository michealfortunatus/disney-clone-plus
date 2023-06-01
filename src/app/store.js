// import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";
// import movieReducer from '../features/Movie/movieSlice';
// import userReducer from "../features/user/userSlice";
// import userSlice from "../features/user/userSlice";


// export const store = configureStore({
//     reducer:{
//         // counter:counterReducer,
//         movie:movieReducer,
//         user:userSlice
//     },
// });

import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../features/Movie/movieSlice';
import userReducer from "../features/user/userSlice";

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        user: userReducer
    }
});
