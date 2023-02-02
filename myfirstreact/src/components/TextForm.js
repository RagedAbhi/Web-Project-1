import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className={`btn btn-${props.cmode} mx-3`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.cmode} mx-3`} onClick={handleLowClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.length===0?text.split(' ').length-1:text.split(' ').length} words and {text.length} characters</p>
                <p>{0.003 * (text.length===0?text.split(' ').length-1:text.split(' ').length)} minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something to preview it here."}</p>
            </div>
        </>
    )
}
