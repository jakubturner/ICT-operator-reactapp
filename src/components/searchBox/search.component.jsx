import React from "react";
import './searchBox.styles.css'

export const SearchBox = ({placeholder, handleChange}) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}/>
)

export const  handleChange = e => {
    this.setState({searchField: e.target.value}, )
}