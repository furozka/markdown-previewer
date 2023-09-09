import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { enterText, selectIsShowingHelp } from '../redux/markdownSlicer';
import { marked } from 'marked';
const TextPanels = () => {
    const textCurrent = useSelector(state=>state.markdown.textCurrent)
    const isShowingHelp = useSelector(selectIsShowingHelp)
    const dispatch = useDispatch()
    const parsedText = marked(textCurrent, { sanitize: true});
    const processedText = { __html: parsedText };
    console.log(textCurrent)
  return (
    <div className="flex justify-center items-center p-5">
    <textarea 
      value={textCurrent}
      style={{boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"}}
      onChange={(event) => dispatch(enterText(event.target.value))}
      className="w-1/3 min-h-screen bg-slate-400 p-10 border-r-4 border-red-900 boxshadow"
      readOnly={isShowingHelp}></textarea>
    <div
      dangerouslySetInnerHTML={processedText}
      className="w-1/3 min-h-screen max-h-screen overflow-auto bg-slate-400 border-l-4 border-red-900 p-10 text-left ml-3" style={{boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"}}></div>
  </div>
  )
}

export default TextPanels