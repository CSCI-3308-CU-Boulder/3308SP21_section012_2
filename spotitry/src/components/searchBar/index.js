import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import TextField from '@material-ui/core/TextField';

const SearchBar = (props) => {
    const { setSearchValue, token } = props
    const [query, setQuery] = useState('')
    return(
        <TextField
            value={query}
            onChange={(event)=>(setSearchValue(event.currentTarget.value),setQuery(event.currentTarget.value))}
            placeholder={'Search'}
            className={styles.SearchBar}
        />
    )
    
}

export default (SearchBar);