import React from "react";
import {CitiesData, renderCityTitle} from "./CitiesList"
import Autocomplete from "react-autocomplete";
import { useState } from "react";
import axios from "axios";
import Card from "./Card";
const AutoComplete= ()=>{
const [state,setState] = React.useState({ val: '' });
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({weatheName: '',deg:0,speed:0});
  const useHandler=()=>{
      const input=state.val;
    axios.get("https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=a1f2ba12247b475046ced1f183bece6e")
    .then((response) => {
        setItems({weatheName :response.data.name,
        deg :response.data.wind.deg ,
        speed : response.data.wind.speed});
        setIsLoaded(true);
      });
    }   
  return (
    <div className="autocomplete-wrapper">
      <label>Select City</label>
      <Autocomplete
        value={state.val}
        items={CitiesData()}
        getItemValue={item => item.title}
        shouldItemRender={renderCityTitle}
            renderMenu={item => (
          <div className="dropdown">
            {item}
          </div>
        )}
        renderItem={(item, isHighlighted) =>
          <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
            {item.title}
          </div>
        }
        onChange={(event, val) => setState({ val })}
        onSelect={val => setState({ val })}
      />
        <button onClick={useHandler} >Show Weather Details </button><br/><br/>
        {isLoaded ? <Card name={items.weatheName} speed={items.speed} degree={items.deg} /> : <div>No Weather Report </div>}
    </div>
    
  );
}


export default AutoComplete;