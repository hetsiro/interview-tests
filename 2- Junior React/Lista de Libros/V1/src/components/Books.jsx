import { useBooks } from "../hooks/useBooks";
import { AvailableBooks } from "./AvailableBooks"
import { ListedBooks } from "./ListedBooks"


export const Books = () => {

    useBooks();

  return (
    <>
        <AvailableBooks />
        <ListedBooks />
    </>
  )
}
