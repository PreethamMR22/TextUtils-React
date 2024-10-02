import React ,{useState} from 'react'

export default function About(props) {
    const [hover,setHover]=useState(false);
    let switchModeBtnStyle= {
         borderRadius: "10px",
        height:'2.4rem',
        display:'flex',
        alignItems:'center',
        backgroundColor:hover?"rgba(0, 0, 0, 0.81)":"rgb(68, 68, 250)",
        color:"white",
        boxShadow:hover?"rgba(95, 95, 95, 0.3) 5px 2px 10px":"0px 0px 0px rgba(95, 95, 95, 0.0)",
    }
    let MyStyle= {

      background:props.theme,
      color:'black',
    }
    if(props.mode==='dark' && props.theme==='white') {
      MyStyle.background='black';
      MyStyle.color='white';
    }
if(props.mode==='dark' && props.theme==="white") {
  document.body.style.background='black';
  
}
else 
document.body.style.background=props.theme;
if(props.mode==='light' && props.theme==='white') {
  MyStyle.color='black';
}
else MyStyle.color='white';



const [BtnName,setBtnName]=useState("Light Mode");
const body=document.querySelector("body");
// const toggleMode=()=> {
//     if(MyStyle.backgroundColor==='black') {
//         setMystyle({
//             backgroundColor:'white',
//             color:'black'
//         })
//         body.style.backgroundColor='white';
//         setBtnName(" Dark Mode");
//     }
//     else {
//         setMystyle({
//             backgroundColor:'black',
//             color:'white'
//         })
//         body.style.backgroundColor='black';
//         setBtnName("Light Mode");
//     }
// }




  return (
    <div style={MyStyle} >
          <h1 className='my-4'>About Us</h1>
      <div className="accordion" id="accordionExample" style={MyStyle}>
  <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" style={MyStyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header" style={MyStyle}>
      <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" style={MyStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" style={MyStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-4">
<button className="modeSwitcher btn btn-outline-secondary" onClick={toggleMode} style={switchModeBtnStyle} onMouseEnter={()=>setHover(true)} onMouseLeave={()=> setHover(false)}>{BtnName}</button>

</div> */}

    </div>
    
  )
}
