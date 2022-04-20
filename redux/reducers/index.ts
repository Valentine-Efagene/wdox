import { combineReducers } from 'redux'

import demoReducer from '../slice/demoSlice'
import localeReducer from '../slice/localeSlice'
import searchReducer from '../slice/searchSlice'
import projectReducer from '../slice/projectSlice'

export default combineReducers({
  demo: demoReducer,
  locale: localeReducer,
  search: searchReducer,
  project: projectReducer
})
