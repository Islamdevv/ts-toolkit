import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://api-v2.elchocrud.pro/api/v1/18fbe75e5b1cd9d74dfc4794dd85f482/newTodo";

interface initialStateType {
  todo: TodoData[];
}

const initialState: initialStateType = {
  todo: [],
};

export const postReq = createAsyncThunk(
  "post",
  async (newData: TODO.postReq) => {
    const response = await axios.post(url, newData);
    return response.data;
  }
);

export const getReq = createAsyncThunk("get", async () => {
  const response = await axios(url);
  return response.data;
});

export const deleteReq = createAsyncThunk(
  "delete",
  async (_id: TODO.deleteReq) => {
    const response = await axios.delete(`${url}/${_id}`);
    return response.data;
  }
);

const TodoSlices = createSlice({
  name: "todo",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(postReq.fulfilled, (state, action) => {
        state.todo = action.payload;
      })
      .addCase(getReq.fulfilled, (state, action) => {
        state.todo = action.payload;
      })
      .addCase(deleteReq.fulfilled, (state, action) => {
        state.todo = action.payload;
      });
  },
});

export default TodoSlices.reducer;
