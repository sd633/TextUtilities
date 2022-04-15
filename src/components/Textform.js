import React, {useState} from 'react'

export default function Textform(props) {

const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
}

const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
}

const handleClear = () =>{
    let newText = '';
    setText(newText)
}
const handleOnChange = (event) =>{
    setText(event.target.value)
}

const handleCopy = () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
}

const removeExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
}

const [text, setText] = useState(' ');

return (
    <><div className="container" style= {{color: props.mode === 'dark'? 'white':'#04285c'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control"  value = {text} onChange = 
    {handleOnChange} style = {{backgroundColor: props.mode === 'dark'? 'grey':'white', color: props.mode === 'dark'? 'white':'#04285c'}} id="myBox" rows="8"></textarea>
    </div>
    <button type="button" className="btn btn-primary mx-1" onClick = {handleUpClick}>Click to capitalize</button>
    <button type="button" className="btn btn-primary mx-1" onClick = {handleLoClick}>Click to lower case</button>
    <button type="button" className="btn btn-primary mx-1" onClick = {handleClear}>Clear text</button>
    <button type="button" className="btn btn-primary mx-1" onClick = {handleCopy}>Copy text</button>
    <button type="button" className="btn btn-primary mx-1" onClick = {removeExtraSpaces}>Remove extrea spaces</button>
  </div>
  <div className ="container my-3" style={{color: props.mode === 'dark'? 'white':'#04285c'}}>
      <h1>Your text summery</h1>
      <p>{text.split(" ").length} word and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2> 
      <p>{text.length>0?text:"Enter something to preview here"}</p>
  </div>
  </>
    
  )
}
