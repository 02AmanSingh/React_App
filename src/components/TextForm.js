import React, { useState } from 'react'



export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "Success")
    }

    const handleUpLower = ()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "Success")
    }

    const handleUpClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("All text are Cleared.", "Success")
    }

    const handleCopy= ()=>{
        let text= document.getElementById("txtar1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is Copied.", "Success")
    }

    const handleExtraSpaces= ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ")); 
        props.showAlert("Extra Spaces are removed.", "Success")
    }

    const handleOnChange = (event) => {
        // console.log("On change.");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText("Aman Singh"); // correct way to change the state.
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <form>
                <div className="mb-3">
                    <textarea name="Enter-text" value={text} onChange={handleOnChange} id="txtar1" cols="70" rows="10" placeholder='Enter text here!!'></textarea>
                    <br />
                    <button className="btn btn-primary" onClick={handleUpClick}>convert to upper-case</button>
                    <button className="btn btn-primary mx-1" onClick={handleUpLower}>convert to Lower-case</button>
                    <button className="btn btn-primary mx-1" onClick={handleUpClear}>Clear</button>
                    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>

            </form>

        </div>

        <div className="container my-3">
        <h1>Your text Summary</h1>
        <p> {text.split(" ").length} words & {text.length}  characters</p>
        </div>

        </>
    )
}
