import React, {useState} from 'react'
import Proptypes from 'prop-types'
// import Navbar from './Navbar';
export default function Textform(props) {
    const toUpper = () => {
        let temp = text.toUpperCase();
        setText(temp);
        props.msg("Your text in UPPERCASE!!");
        // console.log("trigger")
    }
    const toLower = () => {
        let temp = text.toLowerCase();
        setText(temp);
        props.msg("Your text in lowercase!!");
    }
    const toChange = (event) => {
        setText(event.target.value)
    }
    const toClear = ()=>{
            setText('')
            props.msg("Text Cleared!!");
    }
    const toCopy = ()=>{
            navigator.clipboard.writeText(text);
            props.msg("Text Copied!!");
    }
    const toInvert = ()=>{
        let temp = text.split('')
        // console.log(temp.join(''))
        for(let i=0; i<temp.length; i++){
            if(temp[i] === temp[i].toUpperCase()) temp[i] = temp[i].toLowerCase();
            else temp[i] = temp[i].toUpperCase();
        }
        setText(temp.join(''))
        props.msg("Text Inverted!!");
    }
    const toAlt = ()=>{
        let temp = text.split('');
        // console.log(temp);

        let t = true;
        if(temp[0] === temp[0].toUpperCase()){
            temp[0] = temp[0].toLowerCase();
            t = false;
        }
        else{
            temp[0] = temp[0].toUpperCase();
        }
        // console.log(temp.join(''))
        for(let i=1; i<temp.length; i++){
            if(!(temp[i].charCodeAt(0) > 64 && temp[i].charCodeAt(0) < 91 ) && !(temp[i].charCodeAt(0) > 96 && temp[i].charCodeAt(0) < 123 )) continue;
            if(t){
                temp[i] = temp[i].toLowerCase();
                t = false;
            } else {
                temp[i] = temp[i].toUpperCase();
                t = true;
            }
        }
        // console.log(temp);
        setText(temp.join(''))
        props.msg("Text with Alternate Cases!!");
    }
    const[text, setText] = useState('')
    return (
        <div>
            <div className="mb-3">
                <h3 htmlFor="myBox" className="form-label my-3">{props.heading}</h3>
                <textarea className="form-control form-dark" id="myBox" rows="7" value={text} placeholder="Enter your text to analyze" onChange={toChange}></textarea>
            </div>
            <button disabled={text.length === 0} className={`btn btn-${props.color} m-1`} onClick={toUpper}>Convert to uppercase</button>
            <button disabled={text.length === 0} className={`btn btn-${props.color} m-1`} onClick={toLower}>Convert to lowercase</button>
            <button disabled={text.length === 0} className={`btn btn-${props.color} m-1`} onClick={toInvert}>Inverse Case</button>
            <button disabled={text.length === 0} className={`btn btn-${props.color} m-1`} onClick={toAlt}>Alternating Case</button>
            <button disabled={text.length === 0} className={`btn btn-${props.color} m-1`} onClick={toClear}>Clear Text</button>
            <button disabled={text.length === 0} className={`btn btn-${props.color} m-1`} onClick={toCopy}>Copy Text</button>

            <h4 className="my-4">Analyze</h4>
            <p>{text.length} characters and {text.split(/\s+/).filter(text => text.length > 0).length} words</p>
        </div>
    )
}


Textform.propTypes = {
    heading: Proptypes.string.isRequired
}