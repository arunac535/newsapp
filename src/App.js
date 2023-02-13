import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import  { useRef ,useState} from 'react'


const App =()=> {
  const [progress,setProgress]=useState(0)
  

  

    
    return (
      <div>
        <Router>
        <LoadingBar
        height={2}
        color='#f11946'
        setProgress={progress}
        
        
      />
      <Navbar/>

      <Switch>
          <Route exact path="/"><News setProgress={setProgress}   key="general" pageSize={5}  country="in" category="general"/></Route>
          <Route exact path="/business"><News setProgress={setProgress}  key="business" pageSize={5}  country="in" category="business"/></Route>
          <Route exact path="/weather"><News setProgress={setProgress}  pageSize={5} key="weather" country="in" category="weather"/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress}   key="entertainment" pageSize={5}  country="in" category="entertainment"/></Route>
          <Route exact path="/health"><News setProgress={setProgress}  pageSize={5} key="health"  country="in" category="health"/></Route>
          <Route exact path="/science"><News setProgress={setProgress}   pageSize={5}  key="science" country="in" category="science"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress}   pageSize={5}  key="sports" country="in" category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress}  pageSize={5} key="technology" country="in" category="technology"/></Route>
        </Switch>
      
      </Router>
      </div>
    )

}
export default App
App.state={
  progress:0
}

