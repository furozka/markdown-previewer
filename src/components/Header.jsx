import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsShowingHelp, showHelp } from '../redux/markdownSlicer'
import {FaQuestion} from "react-icons/fa"
const Header = () => {
    const isShowingHelp = useSelector(selectIsShowingHelp)
    const dispatch = useDispatch()
  return (
    <header>
            <h1 className="text-4xl font-bold mt-5 mb-2">Markdown Previewer</h1>
            <div
              onClick={()=>dispatch(showHelp())}
              className={`absolute top-0 right-0 m-5 cursor-pointer ${isShowingHelp && 'active'}`}>
              <FaQuestion className='flex justify-self-end' size={36}/>
            </div>
            
    </header>
  )
}

export default Header