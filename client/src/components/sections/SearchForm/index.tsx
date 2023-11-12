import Image from "next/image";
import { useContext, useState } from "react"
import searchIcon from '../../assets/search.svg'
import { FormStyles } from "./SearchForm.styles";
import { FeedContext } from "@/context/FeedContext";
import { searchProducts } from "@/api/searchProducts";
import { getProducts } from "@/api/getProducts";

/**
 * Search Form component
 *
 * TODO: additional error handling on user input and
 * special characters (outside of API)
 * 
 * An extra div.input-container is used to float
 * the search icon SVG into the input element
 * 
 * @returns JSX
 */
export default function SearchForm () {
  const { setFeedData } = useContext(FeedContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  /**
   * Submission function
   * 
   * Notes
   * Response returned here is saved in context (feed/page.tsx).
   * We check for an empty array in the event that a user wants to clear
   * their text input to return the (original) entire product list.
   * 
   * @param event
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery === '') {
      try {
        const data = await getProducts();

        if (data instanceof Error) {
          throw Error;
        } else {
          setFeedData(data);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const data = await searchProducts(searchQuery);
        
        if (data instanceof Error) {
          throw Error;
        } else {
          setFeedData(data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

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
          onChange={handleChange}
          placeholder="Search"
          className="input-textbox"
        />
      </div>
      <button type="submit" className="button">Search</button>
    </FormStyles>
  )
}