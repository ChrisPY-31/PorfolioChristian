import React from 'react'
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const Mode = ( {theme , handleChangeTheme}) => {
  return (
    <div>
         {theme === "dark" ? (
              <CiLight className=" w-[30px] h-[30px] p-1 rounded-lg dark:text-white cursor-pointer" onClick={handleChangeTheme} />
            ) : (
              <MdOutlineDarkMode className=" w-[30px] h-[30px] p-1 rounded-lg dark:text-white cursor-pointer"
              onClick={handleChangeTheme}
              />
            )}

    </div>
  )
}

export default Mode