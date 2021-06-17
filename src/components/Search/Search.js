import React from "react";
import "../Search/Search.css";

const Search = ({value, placeholder}) => {

    return (
        <div className="search">
            <input type="text" placeholder={placeholder} onBlur={value}/>
        </div>
    )
}

export default Search;