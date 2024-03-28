import './App.css';
import PackageList from "./PackageList";
import { useState,useEffect } from 'react';
import axios from "axios";
import config from "../services/config.json"
import PackageFilter from './PackageFilter';
function App() {
  //Intialized State for storing the data from mockapi,state for keeping copy of original state
  //in order to use it during filtering so that the orignal state is not touched and a state for displaying message 
  //to the user when the search does not match the lists avaialble.
  const [packagelists,setPackagelists]=useState([]);
  const[searchlists,setSearchlists] =useState([]);
  const [noPackageFound,setNoPackageFound]=useState(false);

  //To get and render all the packagelists during the first load of the web browser.
  useEffect(()=>{
    getLists();
  },[])

  //Getting the data from mockapi
  const getLists =async () => {
    const response = await axios.get(`https://${config.apikey}.mockapi.io/PackageCard`)
    setPackagelists(response.data);
    setSearchlists(response.data);
  }

  //Intializing state for storing and displaying all the inputs by the user 
  const [query,setQuery]=useState("");
  const [selectType,setSelectType]=useState('Destination');
  const [minPrice,setMinPrice]=useState('');
  const [maxPrice,setMaxPrice]=useState('');
  const [minRating,setMinRating]=useState('');
  const [maxRating,setMaxRating]=useState('');
  const [minDuration,setMinDuration]=useState('');
  const [maxDuration,setMaxDuration]=useState('');

  //To set the input and select fields for the form
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

    
  //Function to handle the filter operations based on selection criteria
    const searchHandle=(e)=>{
      e.preventDefault();   
      let filteredlists=[...packagelists];
      
      console.log("The lists are: ",filteredlists)
      
      //console.log("The price are ",filteredlists.id.Destination)
      if(selectType === "Destination" && query.trim() !== ""){
        filteredlists = filteredlists.filter((item)=>
        item.Destination.toLowerCase().includes(query.toLowerCase())
      )
      } else {
        console.log("Sorry. The package you are looking for is not available");
      }
      if(selectType==="Price"){
        filteredlists = filteredlists.filter((item)=>{
          const itemPrice=parseFloat(item.Price)
          //console.log("The item price is: ",typeof(itemPrice),itemPrice);
          //console.log(`The minimum price is: ${minPrice}`);
          //console.log(`The max price is: ${maxPrice}`);
          if(parseFloat(itemPrice)>=parseFloat(minPrice)&&
          parseFloat(itemPrice)<=parseFloat(maxPrice)){
            return true;
          }else{
            return false;
          }
      })
      }
      if(selectType==="Rating"){
        filteredlists = filteredlists.filter((item)=>
          parseFloat(item.Rating)>=parseFloat(minRating)&&
          parseFloat(item.Rating)<=parseFloat(maxRating)
        )
      }
      if(selectType==="Duration"){
        filteredlists = filteredlists.filter((item)=>
          parseFloat(item.Duration)>=parseFloat(minDuration)&&
          parseFloat(item.Duration)<=parseFloat(maxDuration)
        )
      } 
      //setting the state based on selection criteria and clearing all the selection 
      setSearchlists(filteredlists); 
      setNoPackageFound(filteredlists.length===0);
      setQuery("");
      setMinPrice("");
      setMaxPrice("");
      setMinRating("");
      setMaxRating("");
      setMinDuration("");
      setMaxDuration("");
   }  
   //To clear all the selections if not done previously and setting the state to the original data
   const handleReset=(e)=>{
    e.preventDefault();
    setQuery("");
    setMinPrice("");
    setMaxPrice("");
    setMinRating("");
    setMaxRating("");
    setMinDuration("");
    setMaxDuration("");
    setSearchlists(packagelists);
    setNoPackageFound(false);
    getLists();
   }

  return (
      /* Connecting and passing props to child components */
    <>
      
      <div className="App">    
      <h1>TravelLink</h1>
      <h2>Welcome to TravelLink! A Travel Package Browsing Platform!</h2>
      
      <PackageFilter textinput={query}  handleTextInput={handleInputText} typeSelect={selectType} miniPrice={minPrice} maxiPrice={maxPrice} 
      miniRating={minRating} maxiRating={maxRating} miniDuration={minDuration} maxiDuration={maxDuration} handleTypeSelect={handleSelectType}
      handleMiniPrice={handleMinPrice} handleMaxiPrice={handleMaxPrice} handleMiniDuration={handleMinDuration} handleMaxiDuration={handleMaxDuration}
      handleMiniRating={handleMinRating} handleMaxiRating={handleMaxRating} handleSearch={searchHandle} resetHandle={handleReset}/>
      {noPackageFound?(
        <p className="message">Sorry! no packages found matching your selection. Please try again.</p>
      ):(<PackageList lists={searchlists} />)}      
      </div>
    </>
  );
}

export default App;

