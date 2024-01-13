import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSLice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;