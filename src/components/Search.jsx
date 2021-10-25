import React from 'react'

const Search = (props) => {
    return (
        <div className="search-container">
            <input 
            type="text" 
            placeholder="Search location"
            onChange={(e) =>props.changeSearch(e)}
            value={props.input}
            />
            <button onClick={props.submit}>Search</button>
            
        </div>
    )   
}

export default Search
