// import TextBg from '../assets/text bg.jpg';
import { useState } from "react";
const Home = (props) => {
    const [text, setText] = useState('');

    const handleClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClickClear = () =>{
        let newText = ('');
        setText(newText);
    }
    const handleCopyClick = () =>{
        navigator.clipboard.writeText(text);
        alert("Text copied to clipboard");
    }
    const handleremovespaces = () =>{
        let newText = text.split(/[ ]+/).join(' ');
        setText(newText);
    }
    const handleonChange = (e) =>{
        setText(e.target.value);
    }

    return (
        <>
            <div className="container" style={{marginTop: '50px'}}>
            <div className="mb-3">
                <label htmlFor="textarea" className="form-label" style={{ fontSize: '1.5rem', fontWeight : '500'}}>{props.heading}</label>
                <textarea className="form-control" value ={text} onChange={handleonChange} id="textarea" rows="12"></textarea>
            </div>
            <button type="button" className="btn btn-danger mx-2 my-1" onClick={()=> handleClick()}>Convert to UpperCase</button>
            <button type="button" className="btn btn-danger mx-2 my-1" onClick={()=> handleLowerClick()}>Convert to LowerCase</button>
            <button type="button" className="btn btn-danger mx-2 my-1" onClick={()=> handleClickClear()}>Clear Text</button>
            <button type="button" className="btn btn-danger mx-2 my-1" onClick={()=> handleCopyClick()}>Copy Text</button>
            <button type="button" className="btn btn-danger mx-2 my-1" onClick={()=> handleremovespaces()}>Remove Extra Spaces</button>
            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p style={{ fontSize: '1.3rem' }}>{text.split(" ").filter((element)=>{return element.length != 0}).length} words and {text.length} chracters</p>
            </div>
        </>
    );
}

 
export default Home;