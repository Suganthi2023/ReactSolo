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
  const [selectType,setSelectType]=useState('Destination');
  const [minPrice,setMinPrice]=useState('');
  const [maxPrice,setMaxPrice]=useState('');
  const [minRating,setMinRating]=useState('');
  const [maxRating,setMaxRating]=useState('');
  const [minDuration,setMinDuration]=useState('');
  const [maxDuration,setMaxDuration]=useState('');

  const handleInputText=(e)=>{
    e.preventDefault();
    const userText=e.target.value;
    setQuery(userText);
  }

  const handleSelectType =(e)=>{
    e.preventDefault();
    console.log("The selection option is ",e.target.value);
    setSelectType(e.target.value);  }
  const handleMinDuration =(e)=>{
    e.preventDefault();
    console.log("The selection option is ",e.target.value);
    setMinDuration(e.target.value);  }
  const handleMaxDuration =(e)=>{
    e.preventDefault();
    console.log("The selection option is ",e.target.value);
    setMaxDuration(e.target.value);  }
  const handleMinPrice =(e)=>{
    e.preventDefault();
    console.log("The selection option is ",e.target.value);
    setMinPrice(e.target.value);  }
  const handleMaxPrice =(e)=>{
    e.preventDefault();
    console.log("The selection option is ",e.target.value);
    setMaxPrice(e.target.value);  }
  const handleMinRating =(e)=>{
    e.preventDefault();
    console.log("The selection option is ",e.target.value);
    setMinRating(e.target.value);  }  
  const handleMaxRating =(e)=>{
    e.preventDefault();
    console.log("The selection option is ",e.target.value);
    setMaxRating(e.target.value);  }
  
    const searchHandle=(e)=>{
      e.preventDefault();
      let newlists = [...packagelists];
      
      if(selectType === "Destination" && query.trim() !== ""){
        newlists = newlists.filter((item)=>
        item.Destination.toLowerCase().includes(query.toLowerCase())
      )
      }
      if(selectType==="Price"){
        newlists = newlists.filter((item)=>
          parseFloat(item.price)>=parseFloat(minPrice)&&
          parseFloat(item.price)<=parseFloat(maxPrice)
        )
      }
      if(selectType==="Rating"){
        newlists=newlists.filter((item)=>
          parseFloat(item.Rating)>=parseFloat(minRating)&&
          parseFloat(item.Rating)<=parseFloat(maxRating)
        )
      }
      if(selectType==="Duration"){
        newlists=newlists.filter((item)=>
          parseFloat(item.Duration)>=parseFloat(minDuration)&&
          parseFloat(item.Duration)<=parseFloat(maxDuration)
        )
      } 
      
      setPackagelists(newlists);  
   }  

   const handleReset=(e)=>{
    e.preventDefault();
    setQuery("");
    setMinPrice("");
    setMaxPrice("");
    setMinRating("");
    setMaxRating("");
    setMinDuration("");
    setMaxDuration("");
    getLists();
   }

  return (

    <>
      <div className="App">
      <h2>Travel Package Browsing Plateform</h2>
      
      <PackageFilter textinput={query}  handleTextInput={handleInputText} typeSelect={selectType} miniPrice={minPrice} maxiPrice={maxPrice} 
      miniRating={minRating} maxiRating={maxRating} miniDuration={minDuration} maxiDuration={maxDuration} handleTypeSelect={handleSelectType}
      handleMiniPrice={handleMinPrice} handleMaxiPrice={handleMaxPrice} handleMiniDuration={handleMinDuration} handleMaxiDuration={handleMaxDuration}
      handleMiniRating={handleMinRating} handleMaxiRating={handleMaxRating} handleSearch={searchHandle} resetHandle={handleReset}/>
      <PackageList lists={packagelists} />
      </div>
    </>
  );
}

export default App;

