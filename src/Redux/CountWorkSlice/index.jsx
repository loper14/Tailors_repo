import { createSlice } from "@reduxjs/toolkit";

let countWorkSlice = createSlice({
  name: "countWork",
  initialState: {
    selectedData: {},
    storeSelectedData: {},
  },
  reducers: {
    setSelectedData(state, action) {
      state.selectedData = action.payload;
    },
    setStoreSelectedData(state, action) {
      state.storeSelectedData = action.payload;
    },
  },
});
export default countWorkSlice.reducer;
export let { setSelectedData, setStoreSelectedData } = countWorkSlice.actions;
