import React from 'react'

const SearchBar = ({search , setSearch}) => {

  return (
    <div>
      <input type="text" value={search} placeholder='search products...' onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default SearchBar
