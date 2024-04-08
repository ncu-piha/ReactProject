import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);

    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      
    const [text,setText]=useState("");
    // setText("new text")//correct way to change the state
    return (
        <>
         <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
            <h2>{props.heading}</h2>
                <div className="form-group">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
           <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
           <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        </div>
        <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter something in the textbox to preview it here"}</p>
        </div>
       </>
       
    )
}
