import TextForm from './componants/TextForm';
import './App.css';
import Navbar from './componants/Navbar';
import About from './componants/About';
import { useState } from 'react';
import Alert from './componants/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './componants/Login';



function App() {
  const [mode,setMode]=useState(`light`);
  const [alert,setAlert]=useState(null);
  const [theme,setTheme]=useState('white');

const toggleTheme=(newTheme)=> {
  switch(newTheme) {
    case 'Gradient Purple': setTheme('linear-gradient(135deg, rgb(89, 0, 255),rgba(0, 0, 0, 0.537)) ');
    break;
    case  'Blue': setTheme('rgb(3, 115, 190)');
      break;
    case 'Gradient Green': setTheme('linear-gradient(135deg,rgb(11, 90, 11),rgb(15, 76, 181))');
    break;
    default : setTheme("white");
    break;
  }
}

  const showAlert=(message,type)=> {
    setAlert({
      msg:message,
      type:type,
    });
    setTimeout(()=> {
      setAlert(null);
    },2000)
  }
  
  const toggleModeFunc=()=> {
    if(mode==='dark' ) {
      document.title='TextUtils-LightMode';
      setMode('light');
      showAlert("Light Mode has been enabled successfully","success");
    
    }
    else {
      document.title='TextUtils-DarkMode';
      setMode('dark');
      document.body.style.background = 'black';
     
     showAlert("Dark Mode has been enabled successfully","success");
    }
  }
  return (
    <>  



<Router basename="/TextUtils-React">
<Navbar title="TextUtils" home="Home" aboutText="about" mode={mode} theme={theme} toggleTheme={toggleTheme} toggleMode={toggleModeFunc} ></Navbar>
<Alert alert={alert}/>
<Routes>
<Route exact path="/about"
element={
<div className="container">
<About toggleMode={toggleModeFunc} mode={mode}  toggleTheme={toggleTheme} theme={theme}/>
</div>
}
/> 

<Route exact path="/"
element={  <div className="container">
<TextForm heading="Enter the text to Analyze" title="" showAlert={showAlert} theme={theme} value="Enter your texthere" mode={mode}> </TextForm>
</div>
}
/>
<Route exact path="/login" element={<Login mode={mode} theme={theme} ></Login>} />


 </Routes>
 </Router>

  </>

  );
}

export default App;
