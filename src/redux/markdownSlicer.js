import { createSlice } from "@reduxjs/toolkit";

const help = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

const initialState ={
    textCurrent: 'this is user input',
  textUser: 'this is user input',
  textHelp: help,
  isShowingHelp: false,
}

export const markdownSlicer = createSlice({
    name: "markdown",
    initialState,
    reducers:{
        enterText: (state,action)=>{
            state.textCurrent = action.payload
            state.textUser = action.payload
        },
        showHelp: (state)=>{
            state.isShowingHelp = !state.isShowingHelp
        }
    }
})

export const { enterText, showHelp} = markdownSlicer.actions
export const selectIsShowingHelp = state=>state.markdown.isShowingHelp
export default markdownSlicer.reducer