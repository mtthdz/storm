import Image from "next/image";
import { useState } from "react"
import searchIcon from '../../assets/search.svg'
import { FormStyles } from "./SearchForm.styles";

export default function SearchForm () {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hello');
  }

  return (
    <FormStyles onSubmit={handleSubmit}>
      <label htmlFor="searchInput">Search</label>
      <div className="input-container">
        <div className="icon-container">
          <Image
            src={searchIcon}
            alt="Search icon"
            className="icon"
          />
        </div>
        <input
          type="text"
          id="searchInput"
          value={searchQuery}
          onChange={() => setSearchQuery}
          placeholder="Search"
          className="input-textbox"
        />
      </div>
      <button type="submit" className="button">Search</button>
    </FormStyles>
  )
}