// 저장소에 어떤 Reducer가 들어가있는지 확인가능
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/CreateAsyncThunk";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
