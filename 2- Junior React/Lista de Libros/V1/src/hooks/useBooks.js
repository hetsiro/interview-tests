import { useDispatch, useSelector } from "react-redux";
import { setBooks, setGenres } from "../store/slice/librarySlice";
import { getBooks } from "../helpers/getBooks";
import { getGenres } from "../helpers/getGenres";
import { useEffect } from "react";

export const useBooks = () => {

    const { books } = useSelector((state) => state.library);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(setBooks(getBooks()));
    }, [])
  
    useEffect(() => {
      dispatch(setGenres(getGenres(books)));
    }, [books])
  
    useEffect(() => {
      const handleStorageChange = (event) => {
  
        if (event.key === 'sortedBooks' || event.key === 'actualList') {
          dispatch(setBooks(getBooks()));
        }
      }
  
      return () => {
        window.addEventListener('storage', handleStorageChange)
      }
    }, [])
}
