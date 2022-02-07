import React ,{useState} from 'react'
import Navbar from './conponent/Navbar'
import TextForm from './conponent/Textform'
import Alert from './conponent/Alert'

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#001020"
      showAlert("dark mode is enable", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("light mode is enable", "success")
    }
  }

  return (
    <>
      <Navbar tital="Mohd Faruk" aboutest="About Us" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <TextForm mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
