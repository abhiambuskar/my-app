import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
      //  console.log("Uppercase was clicked " + text)
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert('converted to Uppercase','success');
    }
    
    const handleLowClick = ()=>{
      let newtext = text.toLowerCase();
      setText(newtext)
      props.showAlert('converted to Lowercase','success');
    }


    const handleOnChange = (event) => {
      //  console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    //setText("New Text")
  return (
    <>
      <div className='container' style={{backgroundColor:props.mode === 'light'?'dark':'light'}}>
          
          <h1>{props.heading} </h1>
          <div className="mb-3">
          <textarea className="form-control" id="myBox"onChange={handleOnChange} value={text} style={{backgroundColor:props.mode === 'light'?'dark':'light', color:props.mode === 'light'?'dark':'light'}} rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert the test to Uppercase</button>
          <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert the test to Lowercase</button>

      </div>

      <div className="container my-3" style={{backgroundColor:props.mode === 'light'?'dark':'light'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s + /).filter((element) =>{return element.lenght !== 0}) .length } words, {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element) =>{return element.lenght !== 0}).length } minutes to read the paragraph</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text: "Enter something in textbox to preview it here"}</p>
      </div>
    
    </>
  )
}
