// import styles from './SearchBar.module.css'
import { useState, KeyboardEvent } from 'react'
import TuneIcon from '@mui/icons-material/Tune'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

import * as yup from 'yup'

import { search } from '../../../redux/slice/searchSlice'
import { useAppDispatch } from '../../../redux/hooks'

interface ISearchBarProps {
  className?: string
  placeholder?: string
  style?: { [key: string]: string }
}

const validationSchema = yup.object({
  name: yup.string().required('Please enter a name').max(255),
})

const SearchBar = ({ placeholder }: ISearchBarProps) => {
  const dispatch = useAppDispatch()
  const [name, setName] = useState<string>()

  const searchProject = async (name: string | undefined) => {
    try {
      const valid = await validationSchema.isValid({ name })
      dispatch(search(valid ? name : undefined))
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearch = async () => {
    searchProject(name)
  }

  /*const handleKeyboardEvent = (e: KeyboardEvent) => {
    e.preventDefault()
    setName(e.target.value)

    if (e.key === 'Enter') {
      searchProject(name)
    }
  }*/

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        background: 'transparent',
        display: 'flex',
        margin: '10px 0',
        alignItems: 'center',
        boxShadow: 'none',
        backgroundColor: '#ffffff40',
        color: 'white',
        width: '100%',
      }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
        <SearchIcon sx={{ color: 'white' }} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'white' }}
        placeholder={placeholder}
        onChange={(e) => {
          setName(e.target.value)
        }}
        // onKeyUp={(e) => {
        //   e.preventDefault()
        // }}
        inputProps={{ 'aria-label': 'search database' }}
      />
      <IconButton sx={{ p: '10px' }} aria-label="tune">
        <TuneIcon sx={{ color: 'white' }} />
      </IconButton>
    </Paper>
  )
}

SearchBar.defaultProps = {
  style: {},
}

export default SearchBar
