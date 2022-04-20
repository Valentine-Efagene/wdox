// import styles from './SearchBar.module.css'
import { useState, KeyboardEvent } from 'react'
import TuneIcon from '@mui/icons-material/Tune'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import styles from './ActiveSearchBar.module.css'
import ILoadingState from '../../../interfaces/LoadingState'

import * as yup from 'yup'

import { search } from '../../../redux/slice/searchSlice'
import { setActive } from '../../../redux/slice/projectSlice'
import { IProject } from '../../../interfaces/Project'
import { Cancel } from '@mui/icons-material'
import { useRouter } from 'next/router'

interface IActiveSearchBarProps {
  placeholder?: string
}

const validationSchema = yup.object({
  name: yup.string().required('Please enter a name').max(255),
})

export default function ActiveSearchBar({
  placeholder,
}: IActiveSearchBarProps) {
  const [name, setName] = useState<string>()
  const [projects, setProjects] = useState<Array<IProject>>([])
  const router = useRouter()

  const status: ILoadingState = useAppSelector((state) => state.project.status)

  const handleKeyboardEvent = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      searchProject(name)
    }
  }

  // const searchResults = useAppSelector((state) => state.search.results) || []
  const dispatch = useAppDispatch() // Will use this to set selected project from project slice

  const searchProject = async (name: string | undefined) => {
    try {
      const valid = await validationSchema.isValid({ name })
      const _promise = dispatch(search(valid ? name : undefined))
      //const _projects = await _promise.unwrap()
      setProjects(await _promise.unwrap())
      //console.log('_projects: ', _projects)
      console.log('state projects: ', projects)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearch = async () => {
    searchProject(name)
  }

  return (
    <Paper
      sx={{
        p: '2px 4px',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        margin: '10px 0',
        alignItems: 'center',
        boxShadow: 'none',
        color: 'white',
        width: '100%',
      }}
      onBlur={() => {
        //setProjects([])
      }}
    >
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          background: 'transparent',
          position: 'relative',
          display: 'flex',
          margin: '10px 0',
          alignItems: 'center',
          boxShadow: 'none',
          backgroundColor: '#ffffff40',
          color: 'white',
          width: '100%',
        }}
      >
        <IconButton
          sx={{ p: '10px' }}
          aria-label="search"
          onClick={handleSearch}
        >
          <SearchIcon sx={{ color: 'white' }} />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, color: 'white' }}
          placeholder={placeholder}
          onChange={(e) => {
            setName(e.target.value)
          }}
          onKeyPress={handleKeyboardEvent}
          inputProps={{ 'aria-label': 'search database' }}
        />
        {/* <IconButton sx={{ p: '10px' }} aria-label="tune">
          <TuneIcon sx={{ color: 'white' }} />
        </IconButton> */}
        {status === ILoadingState.LOADING && <CircularProgress />}
        {status === ILoadingState.IDLE && (
          <IconButton sx={{ p: '10px' }} aria-label="tune">
            <TuneIcon sx={{ color: 'white' }} />
          </IconButton>
        )}
      </Paper>
      {projects.length > 1 && (
        <List
          sx={{
            width: '100%',
            position: 'absolute',
            bottom: '-130px',
            color: 'black',
            zIndex: 2,
            maxWidth: 320,
            bgcolor: 'background.paper',
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              id="nested-list-subheader"
            >
              Projects{' '}
              <IconButton
                onClick={() => {
                  setProjects([])
                }}
                sx={{ p: '10px' }}
                aria-label="tune"
              >
                <Cancel sx={{ color: 'black' }} />
              </IconButton>
            </ListSubheader>
          }
        >
          {projects.map((project, index) => {
            const { name } = project
            return (
              <ListItemButton
                onClick={() => {
                  console.log(name)
                  dispatch(setActive(project))
                  router.push('/doodles')
                }}
                key={index}
                className={styles.listItem}
              >
                <ListItemText primary={name} />
              </ListItemButton>
            )
          })}
        </List>
      )}
    </Paper>
  )
}
