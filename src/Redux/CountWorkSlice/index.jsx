import { createSlice } from "@reduxjs/toolkit";

let countWorkSlice = createSlice({
  name: "countWork",
  initialState: {
    selectedData: {},
  },
  reducers: {
    setSelectedData(state, action) {
      state.selectedData = action.payload;
    },
  },
});
export default countWorkSlice.reducer;
export let { setSelectedData } = countWorkSlice.actions;
