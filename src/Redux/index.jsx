import { configureStore } from "@reduxjs/toolkit";
import CountWorkSlice from "./CountWorkSlice";

export default configureStore({
  reducer: {
    countWork: CountWorkSlice,
  },
});
