import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { IProject } from '../../interfaces/Project'
import LoadingState from '../../interfaces/LoadingState'

interface ISearchState {
  results: Array<IProject>
  status: LoadingState
}

const initialState: ISearchState = {
  results: [],
  status: LoadingState.IDLE
}

export const search = createAsyncThunk('search/search', async (name: string | undefined,
  //thunkApi
) => {
  // const { signal } = thunkApi
  // const tokenSource = axios
  //   .CancelToken.source()
  // signal.addEventListener('abort', () => {
  //   tokenSource.cancel()
  // })

  if (!name) {
    return []
  }

  const result = await axios.post(
    process.env.apiBaseUrl + '/api/nft/project/search', {
    query: "bored ape"
  }
  )

  return Object.values(result?.data) as Array<IProject>
})

const searchSlices = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearResults: (state) => {
      state.results = []
    },
  }, extraReducers: (builder) => {
    builder
      .addCase(search.pending, (state, action) => {
        state.status = LoadingState.LOADING
      })
      .addCase(search.rejected, (state, action) => {
        state.status = LoadingState.IDLE
      })
      .addCase(search.fulfilled, (state, action) => {
        state.status = LoadingState.IDLE
        state.results = action.payload
      })
  }
})

export const { clearResults } = searchSlices.actions
export default searchSlices.reducer
