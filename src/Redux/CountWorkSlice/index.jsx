import { createSlice } from "@reduxjs/toolkit";

let countWorkSlice = createSlice({
  name: "countWork",
  initialState: {
    selectedData: {},
    storeSelectedData: {},
    otkSelectedData: {},
  },
  reducers: {
    setSelectedData(state, action) {
      state.selectedData = action.payload;
    },
    setStoreSelectedData(state, action) {
      state.storeSelectedData = action.payload;
    },
    setOtkSelectedData(state, action) {
      state.otkSelectedData = action.payload;
    },
  },
});
export default countWorkSlice.reducer;
export let { setSelectedData, setStoreSelectedData, setOtkSelectedData } =
  countWorkSlice.actions;
