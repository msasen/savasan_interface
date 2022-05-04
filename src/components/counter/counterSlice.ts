import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import { RootState, AppThunk } from '@store/index'
import counterAPI from './counterAPI'

export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle'
}

//* Aşağıdaki işleve thunk adı verilir ve async logic gerçekleştirmemizi sağlar. dispatch
//* normal bir eylem gibi gönderilebilir: `dispatch(incrementAsync(10))`. Bu
//* ilk argüman olarak 'gönder' işleviyle thunk'ı çağırır. zaman uyumsuz
//* kod daha sonra yürütülebilir ve diğer eylemler gönderilebilir. Thunks
//* genellikle zaman uyumsuz istekler yapmak için kullanılır.
export const incrementAsync = createAsyncThunk('counter/counterAPI', async (amount: number) => {
  const response = await counterAPI(amount)
  //*  Döndürdüğümüz değer olan `fulfilled` action payload olur.
  return response.data
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  //* `reducers` alanı reducers tanımlamaya ve actions oluşturmaya yarar
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  },
  //* 'extraReducers' alanı, dilimin başka bir yerde tanımlanan eylemleri işlemesine izin verir,
  //* createAsyncThunk tarafından veya diğer dilimlerde oluşturulan eylemler dahil.
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, state => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value += action.payload
      })
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

//* Aşağıdaki fonksiyona seçici denir ve aşağıdakilerden bir değer seçmemize izin verir.
//* Selecotr ayrıca kullanıldıkları yerde satır içi olarak da tanımlanabilir.
//* For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value

//* Hem sync hem de asenkron mantığı içerebilen thunkları elle de yazabiliriz.
// Geçerli duruma göre koşullu gönderme eylemlerine bir örnek.
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState())
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount))
    }
  }

export default counterSlice.reducer
