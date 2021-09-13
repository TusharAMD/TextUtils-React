import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Upper was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upeercase!","Success");
    }

    const handleLoClick=()=>{
        // console.log("Upper was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","Success");
    }

    const handleClearClick=()=>{
        // console.log("Upper was clicked" + text);
        let newText='';
        setText(newText)
        props.showAlert("Clear all meassage!","Success");
    }

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const handleCopy=()=>{
        console.log("I am copy")
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Your text is copied","Success")
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces are succesfully removed","Success")
    }
    const [text,setText] = useState('Enter text here');
    // setText("new text");
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Click</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}



