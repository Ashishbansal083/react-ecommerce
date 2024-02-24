import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder,fetchAllOrders } from './orderAPI';

const initialState = {
  orders: [],
  status: 'idle',
  currentOrder:null,
  totalOrders:0,
}; 

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const createOrderAsync = createAsyncThunk(
  'counter/createOrder',
  async (order) => {
    const response = await createOrder(order);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchAllOrdersAsync = createAsyncThunk(
  'counter/fetchAllOrders',
  async (pagination) => {
    const response = await fetchAllOrders(pagination);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducer:{
    resetOrder:(state)=>{
      state.currentOrder=null;      
    },
  },
  // The `reducers` field lets us define reducers and generate associated actions
    
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload);
        state.currentOrder=action.payload;
      })
      .addCase(fetchAllOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders=action.payload.orders;
        state.totalOrders=action.payload.totalOrders;
      });
  },
});

export const { resetOrder } = orderSlice.actions;


export const selectCurrentOrder = (state) => state.order.currentOrder;
export const selectOrders = (state) => state.order.orders;
export const selectTotalOrders = (state) => state.order.totalOrders;


export default orderSlice.reducer;
