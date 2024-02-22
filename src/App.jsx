import "./App.css"

import React, { useState } from "react"
import Navbar from "./component/Navbar"
import News from "./component/News"
import Footer from "./component/Footer"
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
// const apiKey='00a8c5313f194349aaad449a66aa50ed'
const apiKey = import.meta.env.NEW_API_KEY


const App =()=>{
  
   const pageSize=10
   

   const [progress, setProgress] = useState(0)
  
    return (
      <div >
        <LoadingBar color='blue' height='4px' progress={progress} onLoaderFinished={() => setProgress(0)} />
        <Navbar />
       
        <Routes>
        <Route exact path="/" element={<News setProgress={setProgress}  apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
        <Route exact path="/general" element={ <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
        <Route exact path="/business"  element={  <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
        <Route exact path="/entertainment" element={ <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
        <Route exact path="/health" element={ <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}></Route>
       
        <Route exact path="/science" element={ <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
        <Route exact path="/sports" element={ <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
        <Route exact path="/technology" element={ <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
        </Routes>
       
        <Footer/>
        
      </div>
    )
}

export default App