import React, {useState} from 'react'
import PropTypes from 'prop-types'





export default function TextForm(props) {


  const [text,setText]=useState("");
document.body.style.background=props.theme;
if(document.body.style.background==='white') {
  document.body.style.color='black';
}


if(props.mode==='dark' && props.theme==="white") {
  document.body.style.background="black";
  document.body.style.color="white";
}
else if(props.mode==='light' && props.theme==="white") {
  document.body.style.color="black";
  document.body.style.background="white";
} 

else document.body.style.color='white';
const handleSaveFile=()=> {
  let blob=new Blob([text],{type: "text/plain"});
  const link=document.createElement("a");
  link.href=URL.createObjectURL(blob);
  link.download="PreethamFiles.txt";
 document.body.appendChild(link);
 link.click();
 document.body.removeChild(link);
 props.showAlert("File Saved","success");
}






  const [buttonName,setButtonName]=useState("Change to UpperCase");
const UpperInvoked=()=> {
  setText(text.toUpperCase());
  props.showAlert("Changed to UpperCase","success");
}
const handleClearText=()=> {
  setText('');
  props.showAlert("Text is cleared ","danger");
}
const lowerInvoked=()=> {
  setText(text.toLowerCase());
  props.showAlert("Changed to LowerCase","success");
}
const onChangeHandler=(event)=> 
{

    setText(event.target.value);
 
}
const keyDownHandler=(event)=> {
  if(event.key==="Enter") {
    if(buttonName==="Convert to LowerCase") {
      lowerInvoked();
    }
    else UpperInvoked();
  }
else if(event.key==="ArrowUp") setButtonName("Convert to LowerCase");
else if(event.key==="ArrowDown") setButtonName("Convert to UpperCase");
  
}
const clipBoardHander=()=> {
 let Boxtext=document.querySelector("#myBox");
 Boxtext.select();
 navigator.clipboard.writeText(Boxtext.value);
 props.showAlert("Copied to Clipboard!","warning");
}

const styleTextInputDark= {
backgroundColor:'rgba(72, 72, 72, 0.453)',
color:'white',

}
const styleTextInputLight= {
  backgroundColor:'white',
  color:'black',
  boxShadow:'rgba(0, 0, 0, 0.179) 2px 2px 10px',

}
const HandleThroughButton=()=> {
  if(buttonName==="Convert to LowerCase") {
    lowerInvoked();
  }
  else UpperInvoked();
}
let timeToRead=0;
const readTimeFunc=()=> {
 
  let arr=text.split(" ");
  if(arr.length===1 && arr[0]==="") timeToRead=0;
  else timeToRead=text.split(" ").length*0.008;
}
let wordCount=0;
 const wordCountFunc=()=> {
  let arr=text.split(" ");
  if(arr.length===1 && arr[0]==="") wordCount=0;
  else if(arr[arr.length-1]==="") wordCount=arr.length-1;
  else wordCount= arr.length;

 } 
 wordCountFunc();
 readTimeFunc();
  return (
    <>
    <div className="container my-4">
    <div>
        <h1 className="heading">{props.heading}</h1>
   <div className="mb-3">
    <label htmlFor="myBox" className="form-label">Example textarea</label>
    <textarea row="8  " onChange={onChangeHandler} id="myBox" className="form-control" value={text} onKeyDown={keyDownHandler} style={props.mode==='dark'?styleTextInputDark:styleTextInputLight}></textarea>
   </div>
    <button className="btn btn-primary" onClick={HandleThroughButton} >{buttonName}</button>
    <button className="btn btn-outline-danger mx-2" onClick={handleClearText}>Clear Text</button>
    <button className="btn btn-outline-success mx-2 my-2" onClick={handleSaveFile}>Save File</button>
   <button className="btn btn-outline-secondary mx-2 my-2" onClick={clipBoardHander}>Copy to Clipboard</button>
  
   </div>   
    </div>

<div className="container my-3">
  <h1>Your text Summary</h1>

  <p>{wordCount} words, {text.length} characters</p>
  <p><b>Reading Time:</b> {timeToRead}min</p>
</div>
<h3>Preview </h3>
<p>{text.length > 0 ? text : <i>Enter the text to preview</i>}</p>

    </>
  )
}
TextForm.propTypes = {
  heading: PropTypes.string,
  title:PropTypes.string.isRequired
}