import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsShowingHelp, showHelp } from '../redux/markdownSlicer'

const Header = () => {
    const isShowingHelp = useSelector(selectIsShowingHelp)
    const dispatch = useDispatch()
  return (
    <header>
            <h1 className="app-title">Markdown Previewer</h1>
            <div
              onClick={()=>dispatch(showHelp())}
              className={`help-button ${isShowingHelp && 'active'}`}>
              <i className="fa fa-question" aria-hidden="true"></i>
            </div>
    </header>
  )
}

export default Header