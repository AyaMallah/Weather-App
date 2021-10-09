import React from "react";
import './Search.css'

function Search() {
  return (
    <form>
      <input
        type="search"
        placeholder="Enter city..."
        autoFocus="on"
        className="w-50"
      />
      <input type="submit" value="Search" />
      <input type="submit" value="Current" />
    </form>
  )
}
export default Search