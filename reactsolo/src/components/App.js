import './App.css';
import PackageList from "./PackageList";
import { useState,useEffect } from 'react';
import axios from "axios";
import config from "../services/config.json"
import PackageFilter from './PackageFilter';
function App() {

  const [packagelists,setPackagelists]=useState([]);

  useEffect(()=>{
    getLists();
  },[])

  const getLists =async () => {
    const response = await axios.get(`https://${config.apikey}.mockapi.io/PackageCard`)
    setPackagelists(response.data);
  }

  const [query,setQuery]=useState("");
  const [selectType,setSelectType]=useState("Destination");
  const [minPrice,setMinPrice]=useState('');
  const [maxPrice,setMaxPrice]=useState('');
  const [minRating,setMinRating]=useState('');
  const [maxRating,setMaxRating]=useState('');
  const [minDuration,setMinDuration]=useState('');
  const [maxDuration,setMaxDuration]=useState('');

  /*const handleInputText=(e)=>{
    e.preventDefault();
    const userText=e.target.value;
    setQuery(userText);
  }*/

  const changeHandle =(e)=>{
    e.preventDefault();
    console.log("The selection option is ",e.target.value);

  }

  

  return (

    <>
      <div className="App">
      <h2>Travel Package Browsing Plateform</h2>
      <PackageList lists={packagelists} />
      <PackageFilter textinput={query}  typeSelect={selectType} miniPrice={minPrice} maxiPrice={maxPrice} 
      miniRating={minRating} maxiRating={maxRating} miniDuration={minDuration} maxiDuration={maxDuration} handleChange={changeHandle}/>
      </div>
    </>
  );
}

export default App;

