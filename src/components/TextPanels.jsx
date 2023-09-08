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
    
  return (
    <div className="text-panels">
    <textarea
      value={textCurrent}
      onChange={(event) => dispatch(enterText(event.target.value))}
      className="text-panel-left"
      readOnly={isShowingHelp}></textarea>
    <div
      dangerouslySetInnerHTML={processedText}
      className="text-panel-right"></div>
  </div>
  )
}

export default TextPanels