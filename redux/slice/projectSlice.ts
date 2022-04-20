import { IHydratedProject } from './../../interfaces/Project';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import LoadingState from '../../interfaces/LoadingState'
import { IProject } from '../../interfaces/Project'

interface IProjectState {
  active: IProject | null | undefined;
  hydratedActive: IHydratedProject;
  status: LoadingState
}

const initialState: IProjectState = {
  active: null,
  hydratedActive: {
    _id: null,
    name: null,
    imageUrl: null,
    about: null,
    collection_slug: null,
    contract_address: null,
    health: 'Unverified',
    total_nfts: 0,
    website: null,
    twitter: null,
    discord: null,
    medium: 'No account',

    opensea: { floor_price: 0 },
    looksrare: { floorPrice: 0 }
  },
  status: LoadingState.IDLE
}

export const hydrate = createAsyncThunk('project/hydrate', async (project: IProject) => {
  const { contract_address, collection_slug } = project

  const { data: { data: looksrare } } = await axios.get(`https://api.looksrare.org/api/v1/collections/stats?address=${contract_address}`)
  const { data: { stats: opensea } } = await axios.get(`https://api.opensea.io/api/v1/collection/${collection_slug}/stats`)
  const result: IHydratedProject = { ...project, looksrare: looksrare, opensea }

  return result
})

const projectSlices = createSlice({
  name: 'project',
  initialState,
  reducers: {
    clearActive: (state) => {
      state.active = null
    },
    setActive: (state, action) => {
      state.active = action.payload
    }
  }, extraReducers: (builder) => {
    builder
      .addCase(hydrate.pending, (state, action) => {
        state.status = LoadingState.LOADING
      })
      .addCase(hydrate.rejected, (state, action) => {
        state.status = LoadingState.IDLE
      })
      .addCase(hydrate.fulfilled, (state, action) => {
        state.status = LoadingState.IDLE
        state.hydratedActive = action.payload
      })
  }
})

export const { clearActive, setActive } = projectSlices.actions
export default projectSlices.reducer
