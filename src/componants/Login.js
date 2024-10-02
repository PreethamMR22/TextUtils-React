import React from 'react'

export default function Login(props) {
    const styleBoundary= {
        backgroundColor:'blue',
        height:'40rem',
        position:'absolute',
        top:'8rem',
        left:'5rem',
        paddingTop:'4rem',
        borderRadius:'2rem',
        backgroundColor:'(255, 255, 255, 0.455)',
        boxShadow:'rgba(0, 0, 0, 0.579) 2px 2px 10px'
    }

    let MyStyle= {

        background:props.theme,
        color:'black',
      }
      if(props.mode=='dark' && props.theme=='white') {
        MyStyle.background='black';
        MyStyle.color='white';
      }
  if(props.mode==='dark' && props.theme==="white") {
    document.body.style.background='black';
    
  }
  else 
  document.body.style.background=props.theme;
  if(props.mode=='light' && props.theme=='white') {
    MyStyle.color='black';
  }
  else MyStyle.color='white';
  



  return (
    <>
    <div className="container my-3 " style={styleBoundary}>

    <div className="input-group mb-3" style={MyStyle}>
  <span className="input-group-text" id="basic-addon1">@</span>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
</div>

<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <span className="input-group-text" id="basic-addon2">@example.com</span>
</div>

<div className="mb-3">
  <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
  <div className="input-group">
    <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
  </div>
  <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
</div>

<div className="input-group mb-3">
  <span className="input-group-text">$</span>
  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
  <span className="input-group-text">.00</span>
</div>

<div className="input-group mb-3"  >
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
  <span className="input-group-text">@</span>
  <input type="text" className="form-control" placeholder="Server" aria-label="Server" />
</div>

<div className="input-group">
  <span className="input-group-text">With textarea</span>
  <textarea className="form-control" aria-label="With textarea"></textarea>
</div>
</div> 
    
    </>
  )
}
