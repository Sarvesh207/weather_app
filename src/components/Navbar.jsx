import React, {useRef} from "react";

function Navbar({setCity}) {
    const inputRef = useRef()

    const handleClick = () => {
        setCity(inputRef.current.value)
    }
    
    
  return (
    <div className="bg-[#444444]  text-white pt-4">
      <div className="flex justify-center items-center  gap-4">
        <div className="flex justify-center items-center bg-[#444444] px-3 py-2 w-96 rounded-full border border-gray-500 shadow drop-shadow-2x gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            ref={inputRef}
            type="text"
            className="text-gray-400 w-full bg-[#444444] outline-none "
            placeholder="Search your prefared city..."
          />
        </div>

        <div className="flex justify-center items-center gap-2 bg-[#4CBB17] px-4 py-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <button onClick={handleClick} className="text-balck font-semi-bold text-lg tracking-widest">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
