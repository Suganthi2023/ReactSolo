import './App.css';
import PackageList from "./PackageList";
import { useState,useEffect } from 'react';
import axios from "axios";
import config from "../services/config.json"
function App() {

  const [packagelists,setPackagelists]=useState([]);

  useEffect(()=>{
    getLists();
  },[])

  

  const getLists =async () => {
    const response = await axios.get(`https://${config.apikey}.mockapi.io/PackageCard`)
    setPackagelists(response.data);
  }

  return (

    <>
      <div className="App">
      <h2>Travel Package Browsing Plateform</h2>
      <PackageList lists={packagelists} />
      </div>
    </>
  );
}

export default App;

