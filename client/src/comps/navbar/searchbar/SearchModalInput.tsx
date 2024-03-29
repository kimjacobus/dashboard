import xSquare from '/x-square.svg'
import search from '/search.svg'

import { FilterButtons } from '../filter/FilterButtons'
import { inputProps } from '../../../types/queryProps'

type SearchModalInputProps = {
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  fetchPeople: ({ input }: inputProps) => void
}

export const SearchModalInput = ({ setSearchModalToggle, fetchPeople }: SearchModalInputProps) => {
  return (
    <form className="ModalCard absolute left-12 top-10 z-10 h-2/4 w-3/4 rounded-lg bg-indigo-100 outline outline-2 outline-indigo-500">
      <div className="ModalInput mb-12 flex h-10 w-full items-center gap-4 rounded-t-lg bg-indigo-400 p-2 ps-4 ">
        <img src={search}></img>

        <input
          id="search"
          placeholder="Search Database..."
          className="h-10 w-full border-none bg-indigo-400 placeholder:text-black focus:border-none
          focus:outline-none"
          type="text"
        />
        <img
          className="cursor-pointer"
          onClick={() => setSearchModalToggle((prevState) => !prevState)}
          src={xSquare}
          alt=""
        />
      </div>
      <FilterButtons fetchPeople={fetchPeople} />
    </form>
  )
}
